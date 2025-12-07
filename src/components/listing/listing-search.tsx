'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function ListingSearch({
  placeholder = 'Search...',
  onSearch,
}: {
  placeholder?: string
  onSearch?: (query: string) => void
}) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-9 h-9 bg-background border-border"
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  )
}