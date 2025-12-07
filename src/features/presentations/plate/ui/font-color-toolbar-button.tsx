'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export const DEFAULT_COLORS = [
    '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff',
    '#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff',
    '#e6b8af', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc',
];

interface ColorDropdownMenuItemsProps {
    colors?: string[];
    updateColor?: (color: string) => void;
    clearColor?: () => void;
    className?: string;
}

export function ColorDropdownMenuItems({
    colors = DEFAULT_COLORS,
    updateColor,
    clearColor,
    className
}: ColorDropdownMenuItemsProps) {
    return (
        <div className={cn("p-2 space-y-2", className)}>
            {clearColor && (
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={clearColor}
                >
                    Clear Color
                </Button>
            )}
            <div className="grid grid-cols-10 gap-1">
                {colors.map((color) => (
                    <button
                        key={color}
                        type="button"
                        className={cn(
                            'h-5 w-5 rounded-sm border border-border hover:scale-110 transition-transform',
                        )}
                        style={{ backgroundColor: color }}
                        onClick={() => updateColor?.(color)}
                    />
                ))}
            </div>
        </div>
    );
}

interface FontColorToolbarButtonProps {
    children?: React.ReactNode;
    currentColor?: string;
    onColorChange?: (color: string) => void;
}

export function FontColorToolbarButton({
    children,
    currentColor,
    onColorChange
}: FontColorToolbarButtonProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <ColorDropdownMenuItems
                    updateColor={(color) => {
                        onColorChange?.(color);
                        setIsOpen(false);
                    }}
                />
            </PopoverContent>
        </Popover>
    );
}
