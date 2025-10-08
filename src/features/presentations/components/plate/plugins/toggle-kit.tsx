"use client";

import { TogglePlugin } from "@platejs/toggle/react";

import { IndentKit } from "@/features/presentations/components/plate/plugins/indent-kit";
import { ToggleElement } from "@/features/presentations/components/plate/ui/toggle-node";

export const ToggleKit = [
  ...IndentKit,
  TogglePlugin.withComponent(ToggleElement),
];
