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
    title: 'Indian Geography - Rivers and Drainage System gjhgj gjg gjg gjg gjg gjg gjg g',
    tags: ['Geography', 'SSC CGL'],
    slidesCount: 12,
    date: 'Oct 13',
  },
  { id: 4,
    title: 'Indian Constitution - Fundamental Rights',
    tags: ['Polity', 'UPSC'],
    slidesCount: 15,
    date: 'Oct 10',
  },
  { id: 5,
    title: 'Economic Survey 2025 - Key Highlights',
    tags: ['Economy', 'UPSC'],
    slidesCount: 20,
    date: 'Oct 12',
  },
  { id: 6,
    title: 'Indian Geography - Rivers and Drainage System gjhgj gjg gjg gjg gjg gjg gjg g',
    tags: ['Geography', 'SSC CGL'],
    slidesCount: 12,
    date: 'Oct 13',
  },
  { id: 7,
    title: 'Indian Constitution - Fundamental Rights',
    tags: ['Polity', 'UPSC'],
    slidesCount: 15,
    date: 'Oct 10',
  },
  { id: 8,
    title: 'Economic Survey 2025 - Key Highlights',
    tags: ['Economy', 'UPSC'],
    slidesCount: 20,
    date: 'Oct 12',
  },
  { id: 9,
    title: 'Indian Geography - Rivers and Drainage System gjhgj gjg gjg gjg gjg gjg gjg g',
    tags: ['Geography', 'SSC CGL'],
    slidesCount: 12,
    date: 'Oct 13',
  },
  { id: 10,
    title: 'Indian Constitution - Fundamental Rights',
    tags: ['Polity', 'UPSC'],
    slidesCount: 15,
    date: 'Oct 10',
  },
  { id: 11,
    title: 'Economic Survey 2025 - Key Highlights',
    tags: ['Economy', 'UPSC'],
    slidesCount: 20,
    date: 'Oct 12',
  },
  { id: 12,
    title: 'Indian Geography - Rivers and Drainage System gjhgj gjg gjg gjg gjg gjg gjg g',
    tags: ['Geography', 'SSC CGL'],
    slidesCount: 12,
    date: 'Oct 13',
  },
]

export default function NotesListing() {
  return (
    <ListingContainer
      header="My Notes"
      subheader="View and manage all your created notes"
      searchPlaceholder="Search notes..."
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