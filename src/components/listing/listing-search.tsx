'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function ListingSearch({
  placeholder = 'Search slides by title or topic...',
  onSearch,
}: {
  placeholder?: string
  onSearch?: (query: string) => void
}) {
  return (
    <div className="relative">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search 
          className="w-4 h-4 text-gray-400" 
          strokeWidth={2}
        />
      </div>
      
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>

  )
}