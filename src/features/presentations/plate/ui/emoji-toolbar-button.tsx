'use client';

import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Stub components for emoji picker functionality
// These can be replaced with actual emoji picker implementation

interface EmojiPickerProps {
    isOpen?: boolean;
    onSelectEmoji?: (emoji: string) => void;
    [key: string]: unknown;
}

interface EmojiPopoverProps {
    control: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    setIsOpen?: (open: boolean) => void;
    [key: string]: unknown;
}

export function EmojiPicker({ onSelectEmoji, ...props }: EmojiPickerProps) {
    const emojis = ['💡', '📝', '⚠️', '✅', '❌', '🔥', '⭐', '💎', '🎯', '📌', '🚀', '💪'];

    return (
        <div className="grid grid-cols-6 gap-2 p-2">
            {emojis.map((emoji) => (
                <button
                    key={emoji}
                    type="button"
                    onClick={() => onSelectEmoji?.(emoji)}
                    className="text-xl hover:bg-muted rounded p-1 transition-colors"
                >
                    {emoji}
                </button>
            ))}
        </div>
    );
}

export function EmojiPopover({ control, children, isOpen, setIsOpen, ...props }: EmojiPopoverProps) {
    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                {control}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                {children}
            </PopoverContent>
        </Popover>
    );
}
