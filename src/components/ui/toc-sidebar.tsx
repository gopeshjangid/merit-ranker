// NEWP: Created TOC Sidebar component for displaying and navigating document structure
'use client';

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { useTocSideBar, useTocSideBarState } from '@platejs/toc/react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// NEWP: Styling variants for heading items based on depth level
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
  // NEWP: Optional props for customization
  open?: boolean;
  rootMargin?: string;
  topOffset?: number;
  className?: string;
}

/**
 * NEWP: TocSideBar Component
 * Displays a navigable table of contents in a sidebar
 * Features:
 * - Automatic heading detection from editor content
 * - Active section highlighting based on scroll position
 * - Smooth scroll navigation on click
 * - Mouse interaction handling to pause auto-tracking
 */
export function TocSideBar({
  open = true,
  rootMargin = '0px 0px -80% 0px',
  topOffset = 80,
  className = '',
}: TocSideBarProps) {
  // NEWP: Initialize TOC state with editor integration
  const state = useTocSideBarState({
    open,
    rootMargin,
    topOffset,
  });

  // NEWP: Get navigation handlers and interaction props
  const { navProps, onContentClick } = useTocSideBar(state);

  const { headingList, activeContentId } = state;

  // NEWP: Handle empty state when no headings are present
  if (!headingList || headingList.length === 0) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="text-xs font-medium text-muted-foreground mb-3">
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
      className={`flex flex-col h-full ${className}`}
      aria-label="Table of contents"
    >
      {/* NEWP: Header section */}
      <div className="px-4 py-3 border-b">
        <div className="text-xs font-medium text-muted-foreground">
          TABLE OF CONTENTS
        </div>
      </div>

      {/* NEWP: Scrollable heading list */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-0.5">
          {headingList.map((heading) => {
            // NEWP: Determine if this heading is currently active
            const isActive = activeContentId === heading.id;

            return (
              <Button
                key={heading.id}
                variant="ghost"
                className={headingItemVariants({
                  depth: Math.min(heading.depth, 6) as 1 | 2 | 3 | 4 | 5 | 6,
                  isActive,
                })}
                onClick={(e) => onContentClick(e, heading, 'smooth')}
                title={heading.title}
                aria-current={isActive ? 'location' : undefined}
              >
                <span className="truncate">{heading.title}</span>
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </nav>
  );
}