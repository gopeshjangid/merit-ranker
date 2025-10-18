import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncate(title: string, maxLength: number = 15) {
  return title.length > maxLength ? title.slice(0, maxLength) + '…' : title;
}
