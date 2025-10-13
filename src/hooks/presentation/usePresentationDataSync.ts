import { useEffect } from 'react';
import { usePresentationState } from '@/states/presentation-state';
import { type PlateSlide } from '@/features/presentations/utils/parser';
import { updatePresentation } from '@/app/_actions/presentation/presentationActions';

export function usePresentationDataSync(
  presentationData: any,
  isGeneratingPresentation: boolean,
  shouldFetchData: boolean
) {
  const setCurrentPresentation = usePresentationState((s) => s.setCurrentPresentation);
  const setPresentationInput = usePresentationState((s) => s.setPresentationInput);
  const setSlides = usePresentationState((s) => s.setSlides);
  const setOutline = usePresentationState((s) => s.setOutline);
  const setThumbnailUrl = usePresentationState((s) => s.setThumbnailUrl);
  const setConfig = usePresentationState((s) => s.setConfig);

  // Sync basic presentation data
  useEffect(() => {
    if (isGeneratingPresentation || !shouldFetchData || !presentationData) {
      return;
    }

    setCurrentPresentation(presentationData.id, presentationData.title);
    setPresentationInput(
      presentationData.presentation?.prompt ?? presentationData.title
    );

    const presentationContent = presentationData.presentation?.content as unknown as {
      slides: PlateSlide[];
      config: Record<string, unknown>;
    };

    setSlides(presentationContent?.slides ?? []);

    if (presentationData.presentation?.outline) {
      setOutline(presentationData.presentation.outline);
    }

    // Sync config if present
    if (presentationContent?.config) {
      setConfig(presentationContent.config as Record<string, unknown>);
    }
  }, [
    presentationData,
    isGeneratingPresentation,
    shouldFetchData,
    setCurrentPresentation,
    setPresentationInput,
    setSlides,
    setOutline,
    setConfig,
  ]);

  // Handle thumbnail derivation separately
  useEffect(() => {
    if (isGeneratingPresentation || !shouldFetchData || !presentationData) {
      return;
    }

    const currentThumb = presentationData.thumbnailUrl;
    if (currentThumb) return; // Already has thumbnail

    const presentationContent = presentationData.presentation?.content as unknown as {
      slides: PlateSlide[];
      config: Record<string, unknown>;
    };

    const slides = presentationContent?.slides ?? [];
    
    // Try to derive thumbnail from slides
    const deriveThumbnail = (): string | null => {
      if (!Array.isArray(slides) || slides.length === 0) return null;
      
      // Try root image first
      const firstRoot = slides[0]?.rootImage?.url;
      if (typeof firstRoot === 'string' && firstRoot) return firstRoot;
      
      // Try any slide with root image
      for (const slide of slides) {
        const url = slide?.rootImage?.url;
        if (typeof url === 'string' && url) return url;
      }
      
      // Try to find any image in content
      const findFirstImgUrl = (nodes: unknown[]): string | null => {
        for (const node of nodes) {
          if (!node || typeof node !== 'object') continue;
          const anyNode = node as Record<string, unknown>;
          if (anyNode.type === 'img' && typeof anyNode.url === 'string') {
            return anyNode.url;
          }
          const children = anyNode.children as unknown[] | undefined;
          if (Array.isArray(children)) {
            const found = findFirstImgUrl(children);
            if (found) return found;
          }
        }
        return null;
      };

      for (const slide of slides) {
        const nodes = (slide as unknown as { content?: unknown[] }).content;
        if (Array.isArray(nodes)) {
          const found = findFirstImgUrl(nodes);
          if (found) return found;
        }
      }
      
      return null;
    };

    const derived = deriveThumbnail();
    if (derived) {
      setThumbnailUrl(derived);
      void updatePresentation({
        id: presentationData.id,
        thumbnailUrl: derived,
      });
    }
  }, [presentationData, isGeneratingPresentation, shouldFetchData, setThumbnailUrl]);
}
