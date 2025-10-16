'use client';

import { fetchPresentations } from '@/app/_actions/presentation/fetchPresentations';
import { deletePresentations } from '@/app/_actions/presentation/presentationActions';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';
import { usePresentationState } from '@/states/presentation-state';
import { type Prisma } from '@prisma/client';
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { FileX } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { PresentationItem } from './PresentationItem';
import { SelectionControls } from './SelectionControls';
import { ListingSearch } from '@/components/listing/listing-search';
import { ListingFilters } from '@/components/listing/listing-filters';

type PresentationDocument = Prisma.BaseDocumentGetPayload<{
  include: {
    presentation: true;
  };
}>;

interface PresentationResponse {
  items: PresentationDocument[];
  hasMore: boolean;
}

export default function PresentationsListDialog() {
  const { ref: loadMoreRef, inView } = useInView();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const {
    isSelecting,
    selectedPresentations,
    toggleSelecting,
    selectAllPresentations,
    deselectAllPresentations,
    togglePresentationSelection,
    isSheetOpen,
    setIsSheetOpen,
  } = usePresentationState();


  const { mutate: deleteSelectedPresentations } = useMutation({
    mutationFn: async () => {
      const result = await deletePresentations(selectedPresentations);
      if (!result.success && !result.partialSuccess) {
        throw new Error(result.message ?? 'Failed to delete presentations');
      }
      return result;
    },
    onSuccess: async (result) => {
      await queryClient.invalidateQueries({ queryKey: ['presentations-all'] });
      await queryClient.invalidateQueries({ queryKey: ['recent-items'] });
      deselectAllPresentations();
      toggleSelecting();
      toast({
        title: 'Success',
        description: result.message || 'Selected presentations deleted',
      });
    },
    onError: (error) => {
      console.error('Failed to delete presentations:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to delete presentations',
      });
    },
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery<PresentationResponse>({
    queryKey: ['presentations-all'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await fetchPresentations(pageParam as number);
      return response as PresentationResponse;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: PresentationResponse, allPages) => {
      if (lastPage?.hasMore) {
        return allPages.length;
      }
      return undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      void fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const allPresentations = data?.pages.flatMap((page) => page.items) ?? [];

  const handleSelectAll = () => {
    selectAllPresentations(
      allPresentations.map((presentation) => presentation.id)
    );
  };

  const sidebarContent = () => {
    if (isLoading) {
      return Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="mb-4">
          <Skeleton className="h-16 w-full" />
        </div>
      ));
    }

    if (isError) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <FileX className="h-12 w-12 text-muted-foreground" />
          <p className="text-center text-sm text-muted-foreground">
            Failed to load presentations
          </p>
        </div>
      );
    }

    if (allPresentations.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <FileX className="h-12 w-12 text-muted-foreground" />
          <p className="text-center text-sm text-muted-foreground">
            No presentations found
          </p>
        </div>
      );
    }

    return (
      <>
        <div className="space-y-4 p-0.5">
          {allPresentations.map((presentation) => (
            <PresentationItem
              key={presentation.id}
              presentation={presentation}
              isSelecting={isSelecting}
              onSelect={togglePresentationSelection}
              isSelected={selectedPresentations.includes(presentation.id)}
            />
          ))}
        </div>
        {hasNextPage && (
          <div ref={loadMoreRef} className="py-8">
            <div className="flex justify-center">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <Dialog open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <DialogContent className="max-w-4xl max-h-[85vh] flex flex-col p-0">
            <DialogHeader className="p-6 pb-4 space-y-4">
              <DialogTitle className="text-2xl">Your Presentations</DialogTitle>
              
              {/* Search and Filters */}
              <div className="flex flex-col gap-4">
                <ListingSearch
                  placeholder="Search presentations by title..."
                  onSearch={setSearchQuery}
                />
                <ListingFilters />
              </div>
    
              {/* Action Buttons */}
              <div className="flex items-center justify-between">                                
                <div className="ml-auto">
                  <SelectionControls
                    isSelecting={isSelecting}
                    selectedCount={selectedPresentations.length}
                    totalCount={allPresentations.length}
                    onToggleSelecting={toggleSelecting}
                    onSelectAll={handleSelectAll}
                    onDeselectAll={deselectAllPresentations}
                    onDelete={deleteSelectedPresentations}
                  />
                </div>
              </div>
            </DialogHeader>
    
            <ScrollArea className="flex-1 overflow-y-auto px-6 pb-6">
              {sidebarContent()}
            </ScrollArea>
          </DialogContent>
        </Dialog>
  );
}
