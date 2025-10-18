'use client'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export function ListingGrid<T>({
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-48 rounded-xl" />
        ))}
      </div>
    )
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {items.map(item => (
        <React.Fragment key={item.documentId}>
          {renderItem(item)}
        </React.Fragment>
      ))}
    </div>
  )
}