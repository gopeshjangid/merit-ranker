'use client';

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { useEditorMounted } from 'platejs/react';
import { useTocSideBar, useTocSideBarState } from '@platejs/toc/react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { ChevronRightIcon } from 'lucide-react';

const headingItemVariants = cva(
  'block h-auto w-full cursor-pointer truncate rounded-md px-2 py-1.5 text-left text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
  {
    variants: {
      depth: {
        1: 'pl-2 font-semibold',
        2: 'pl-6 font-medium',
        3: 'pl-10 font-normal',
        4: 'pl-14 font-normal text-muted-foreground',
        5: 'pl-18 font-normal text-muted-foreground',
        6: 'pl-22 font-normal text-muted-foreground',
      },
      isActive: {
        true: 'bg-primary/10 text-primary',
        false: 'text-muted-foreground',
      },
    },
    defaultVariants: {
      depth: 1,
      isActive: false,
    },
  }
);

interface TocSideBarProps {
  open?: boolean;
  rootMargin?: string;
  topOffset?: number;
  className?: string;
}

// Utility to truncate title with ellipsis
function truncateTitle(title: string, maxLength: number = 15) {
  return title.length > maxLength ? title.slice(0, maxLength) + '…' : title;
}

export function TocSideBar({
  open = true,
  rootMargin = '0px 0px -80% 0px',
  topOffset = 80,
  className = '',
}: TocSideBarProps) {
  const isEditorMounted = useEditorMounted();

  if (!isEditorMounted) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="mb-3 text-xs font-medium text-muted-foreground">
          TABLE OF CONTENTS
        </div>
        <div className="text-sm text-muted-foreground/70 italic">
          {!isEditorMounted ? 'Initializing...' : 'Waiting for editor...'}
        </div>
      </div>
    );
  }

  // Now safe to use TOC hooks - editor is guaranteed to be mounted
  return (
    <TocSideBarContent
      open={open}
      rootMargin={rootMargin}
      topOffset={topOffset}
      className={className}
    />
  );
}

/**
 * Internal component that safely uses TOC hooks
 * Split out to ensure hooks are only called when editor is mounted
 */
function TocSideBarContent({
  open,
  rootMargin,
  topOffset,
  className,
}: TocSideBarProps) {
  // Initialize TOC state with editor integration (editor is guaranteed mounted here)
  const state = useTocSideBarState({
    open,
    rootMargin,
    topOffset,
  });

  // Get navigation handlers and interaction props
  const { navProps, onContentClick } = useTocSideBar(state);

  const { headingList, activeContentId } = state;

  // Group headings by main heading (depth 1)
  const groupedHeadings: Array<{
    main: (typeof headingList)[0];
    children: typeof headingList;
  }> = [];
  let currentMain: (typeof headingList)[0] | null = null;
  let currentChildren: typeof headingList = [];

  headingList.forEach((heading) => {
    if (heading.depth === 1) {
      if (currentMain) {
        groupedHeadings.push({ main: currentMain, children: currentChildren });
      }
      currentMain = heading;
      currentChildren = [];
    } else if (currentMain) {
      currentChildren.push(heading);
    }
  });
  if (currentMain) {
    groupedHeadings.push({ main: currentMain, children: currentChildren });
  }

  // Maintain open state for each main heading at parent level
  const [openStates, setOpenStates] = React.useState<boolean[]>(() =>
    groupedHeadings.map(() => true)
  );

  // If headings change, reset openStates length
  React.useEffect(() => {
    setOpenStates((prev) =>
      groupedHeadings.length === prev.length
        ? prev
        : groupedHeadings.map(() => true)
    );
  }, [groupedHeadings.length]);

  // Handle empty state when no headings are present
  if (!headingList || headingList.length === 0) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="mb-3 text-xs font-medium text-muted-foreground">
          TABLE OF CONTENTS
        </div>
        <div className="text-sm text-muted-foreground/70 italic">
          No headings found. Add headings to see the table of contents.
        </div>
      </div>
    );
  }

  return (
    <nav
      {...navProps}
      className={`flex h-full flex-col ${className}`}
      aria-label="Table of contents"
    >
      {/* Header section */}
      <div className="border-b px-4 py-3">
        <div className="text-xs font-medium text-muted-foreground">
          TABLE OF CONTENTS
        </div>
      </div>

      {/* Scrollable heading list */}
      <ScrollArea className="flex-1">
        <div className="space-y-0.5 p-2">
          {groupedHeadings.map(({ main, children }, idx) => (
            <Collapsible
              key={main.id}
              open={openStates[idx]}
              onOpenChange={(open) => {
                setOpenStates((prev) =>
                  prev.map((v, i) => (i === idx ? open : v))
                );
              }}
            >
              <div className="flex items-center gap-2">
                <CollapsibleTrigger asChild>
                  <Button
                    variant='ghost'
                  >
                    <ChevronRightIcon
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openStates[idx] ? 'rotate-90' : ''
                      }`}
                    />
                  </Button>
                </CollapsibleTrigger>
                <Button
                  variant="ghost"
                  className={headingItemVariants({
                    depth: 1,
                    isActive: activeContentId === main.id,
                  })}
                  onClick={(e) => onContentClick(e, main, 'smooth')}
                  title={main.title}
                  aria-current={
                    activeContentId === main.id ? 'location' : undefined
                  }
                  style={{ flex: 1, justifyContent: 'flex-start' }}
                >
                  <span className="truncate">{truncateTitle(main.title)}</span>
                </Button>
              </div>
              <CollapsibleContent>
                {children.map((heading) => (
                  <Button
                    key={heading.id}
                    variant="ghost"
                    className={headingItemVariants({
                      depth: Math.min(heading.depth, 6) as 2 | 3 | 4 | 5 | 6,
                      isActive: activeContentId === heading.id,
                    })}
                    onClick={(e) => onContentClick(e, heading, 'smooth')}
                    title={heading.title}
                    aria-current={
                      activeContentId === heading.id ? 'location' : undefined
                    }
                  >
                    <span className="truncate">
                      {truncateTitle(heading.title)}
                    </span>
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </ScrollArea>
    </nav>
  );
}
