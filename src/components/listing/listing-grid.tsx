'use client'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export interface ListItem {
  documentId: string
  [key: string]: unknown
}

export function ListingGrid<T extends ListItem>({
  items,
  isLoading,
  renderItem,
}: {
  items: T[]
  isLoading?: boolean
  renderItem: (item: T) => React.ReactNode
}) {
  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-56 rounded-lg" />
        ))}
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-muted-foreground">No items found</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map(item => (
        <React.Fragment key={item.documentId}>
          {renderItem(item)}
        </React.Fragment>
      ))}
    </div>
  )
}