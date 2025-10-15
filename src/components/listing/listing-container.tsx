'use client'
import { ListingFilters } from './listing-filters'
import { ListingSearch } from './listing-search'
import { ListingGrid } from './listing-grid'

export interface ListingContainerProps<T> {
  header?: string
  subheader?: string
  items: T[]
  isLoading?: boolean
  filters?: React.ReactNode
  searchPlaceholder?: string
  onSearch?: (query: string) => void
  onFilterChange?: (filters: any) => void
  renderItem: (item: T) => React.ReactNode
}

export function ListingContainer<T>({
  header = 'My Slides',
  subheader = 'View and manage all your created presentations',
  items,
  isLoading,
  filters,
  searchPlaceholder,
  onSearch,
  onFilterChange,
  renderItem,
}: ListingContainerProps<T>) {
  return (
    <section className="w-full py-8">
      <h2 className="text-2xl font-bold mb-2">{header}</h2>
      <p className="mb-6 text-muted-foreground">
        {subheader}
      </p>
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 border border-slate-700 rounded-lg px-4 py-3 bg-background shadow-sm">
  {/* Search Input - Full width on mobile, flex-1 on desktop */}
  <div className="w-full md:flex-1">
    <ListingSearch placeholder={searchPlaceholder} onSearch={onSearch} />
  </div>
  
  {/* Filters Section - Full width on mobile, fixed width on desktop */}
  <div className="w-full md:w-auto flex items-center gap-2 min-w-fit">
    {filters ?? <ListingFilters onChange={onFilterChange} />}
  </div>
</div>

      <ListingGrid isLoading={isLoading} items={items} renderItem={renderItem} />
    </section>
  )
}