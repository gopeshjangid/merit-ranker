"use client";

import { CursorOverlayPlugin } from "@platejs/selection/react";

import { CursorOverlay } from "@/features/presentations/components/plate/ui/cursor-overlay";

export const CursorOverlayKit = [
  CursorOverlayPlugin.configure({
    render: {
      afterEditable: () => <CursorOverlay />,
    },
  }),
];
