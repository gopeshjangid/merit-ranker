'use client';

import { Moon, Sun } from 'lucide-react';
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  useTheme,
} from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="outline"
      className="flex items-center"
      onClick={toggleTheme}
    >
      <>
        <Sun className="h-4 w-4 rotate-0 transition-all dark:hidden" />
        <Moon className="hidden h-4 w-4 rotate-0 transition-all dark:block" />
      </>
    </Button>
  );
}
