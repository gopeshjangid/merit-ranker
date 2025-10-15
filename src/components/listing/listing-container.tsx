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
    <section className="w-full px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">{header}</h2>
      <p className="mb-6 text-muted-foreground">
        {subheader}
      </p>
      <div className="flex gap-2 mb-6">
        <ListingSearch placeholder={searchPlaceholder} onSearch={onSearch} />
        {filters ?? <ListingFilters onChange={onFilterChange} />}
      </div>
      <ListingGrid isLoading={isLoading} items={items} renderItem={renderItem} />
    </section>
  )
}