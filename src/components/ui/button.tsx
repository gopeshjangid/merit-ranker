'use client';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Spinner } from './spinner';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-all duration-150 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'btn-gradient shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
        success: 'bg-green-500 text-primary-foreground hover:bg-green-400/90',
        destructive:
          'text-destructive-foreground bg-destructive hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'm-0 p-0 text-primary underline underline-offset-4',
        loading:
          'disabled flex items-center justify-center bg-primary text-primary-foreground',
        noBackground: 'm-0 bg-transparent p-0 text-sm text-inherit',
        outlineLoading:
          'disabled flex items-center justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        noBackgroundLoading:
          'disabled m-0 flex items-center justify-center bg-transparent p-0 text-sm text-inherit',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-8 w-8 md:h-10 md:w-10',
        xs: 'h-5 rounded-md p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    // If loading, only render Spinner as the single child
    const content =
      variant === 'loading' ||
        variant === 'outlineLoading' ||
        variant === 'noBackgroundLoading'
        ? <Spinner className="h-4 w-4" />
        : children;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
