"use client";

import { createPlatePlugin } from "platejs/react";

import { FixedToolbar } from "@/features/presentations/components/plate/ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/features/presentations/components/plate/ui/fixed-toolbar-buttons";

export const FixedToolbarKit = [
  createPlatePlugin({
    key: "fixed-toolbar",
    render: {
      beforeContainer: () => (
        <FixedToolbar>
          <FixedToolbarButtons />
        </FixedToolbar>
      ),
    },
  }),
];
