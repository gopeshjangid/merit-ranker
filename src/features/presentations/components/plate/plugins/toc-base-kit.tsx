import { BaseTocPlugin } from '@platejs/toc';

import { TocElementStatic } from '@/features/presentations/components/plate/ui/toc-node-static';

export const BaseTocKit = [BaseTocPlugin.withComponent(TocElementStatic)];
