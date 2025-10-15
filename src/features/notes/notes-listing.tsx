'use client'
import { ListingContainer } from '@/components/listing/listing-container'
import { ListingCard } from '@/components/listing/listing-card'

const notes = [
  { id: 1,
    title: 'Indian Constitution - Fundamental Rights',
    tags: ['Polity', 'UPSC'],
    slidesCount: 15,
    date: 'Oct 10',
  },
  { id: 2,
    title: 'Economic Survey 2025 - Key Highlights',
    tags: ['Economy', 'UPSC'],
    slidesCount: 20,
    date: 'Oct 12',
  },
  { id: 3,
    title: 'Indian Geography - Rivers and Drainage System',
    tags: ['Geography', 'SSC CGL'],
    slidesCount: 12,
    date: 'Oct 13',
  },
]

export default function NotesListingPage() {
  return (
    <ListingContainer
      header="My Notes"
      subheader="View and manage all your created notes"
      items={notes}
      renderItem={note => (
        <ListingCard
          {...note}
          onView={() => {/* ... */}}
          onEdit={() => {/* ... */}}
          onDownload={() => {/* ... */}}
          onDelete={() => {/* ... */}}
        />
      )}
    />
  )
}