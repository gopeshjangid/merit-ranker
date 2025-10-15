'use client'
import { Input } from '@/components/ui/input'

export function ListingSearch({
  placeholder = 'Search slides by title or topic...',
  onSearch,
}: {
  placeholder?: string
  onSearch?: (query: string) => void
}) {
  return (
    <Input
      className="max-w-md"
      placeholder={placeholder}
      onChange={e => onSearch?.(e.target.value)}
    />
  )
}