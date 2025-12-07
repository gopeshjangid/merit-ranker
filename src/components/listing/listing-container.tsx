'use client'
import { ListingFilters } from './listing-filters'
import { ListingSearch } from './listing-search'
import { ListingGrid, type ListItem } from './listing-grid'

export interface ListingContainerProps<T extends ListItem> {
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

export function ListingContainer<T extends ListItem>({
  header = 'My Notes',
  subheader = 'View and manage your content',
  items,
  isLoading,
  filters,
  searchPlaceholder = 'Search...',
  onSearch,
  onFilterChange,
  renderItem,
}: ListingContainerProps<T>) {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold gradient-text">{header}</h2>
        <p className="text-sm text-muted-foreground mt-1">{subheader}</p>
      </div>

      {/* Search & Filters Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 p-1 rounded-lg border border-border dark:border-cyan-500/20 bg-card/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="flex-1">
          <ListingSearch placeholder={searchPlaceholder} onSearch={onSearch} />
        </div>
        <div className="flex items-center gap-2">
          {filters ?? <ListingFilters onChange={onFilterChange} />}
        </div>
      </div>

      {/* Grid */}
      <ListingGrid isLoading={isLoading} items={items} renderItem={renderItem} />
    </section>
  )
}