'use client';
import { ListingContainer } from '@/components/listing/listing-container';
import { ListingCard } from '@/components/listing/listing-card';

const mockTests = [
  { id: 1, title: 'UPSC Prelims Mock Test 1', tags: ['UPSC', 'Prelims'], questionsCount: 100, date: 'Oct 14' },
  { id: 2, title: 'SSC CGL Tier 1 Mock', tags: ['SSC', 'CGL'], questionsCount: 50, date: 'Oct 15' },
  { id: 3, title: 'Bank PO Practice', tags: ['Banking', 'PO'], questionsCount: 60, date: 'Oct 16' },
  { id: 4, title: 'Railway NTPC Mock', tags: ['Railway', 'NTPC'], questionsCount: 80, date: 'Oct 17' },
  { id: 5, title: 'NDA Full Test', tags: ['NDA'], questionsCount: 120, date: 'Oct 18' },
  { id: 6, title: 'CAPF Assistant Commandant', tags: ['CAPF'], questionsCount: 90, date: 'Oct 19' },
  { id: 7, title: 'UPSC Mains GS1', tags: ['UPSC', 'Mains'], questionsCount: 20, date: 'Oct 20' },
  { id: 8, title: 'State PCS Mock', tags: ['State PCS'], questionsCount: 70, date: 'Oct 21' },
  { id: 9, title: 'SSC CHSL Tier 1', tags: ['SSC', 'CHSL'], questionsCount: 40, date: 'Oct 22' },
  { id: 10, title: 'UPSC Prelims Mock Test 2', tags: ['UPSC', 'Prelims'], questionsCount: 100, date: 'Oct 23' },
  { id: 11, title: 'SSC CGL Tier 2 Mock', tags: ['SSC', 'CGL'], questionsCount: 60, date: 'Oct 24' },
  { id: 12, title: 'Bank Clerk Practice', tags: ['Banking', 'Clerk'], questionsCount: 55, date: 'Oct 25' },
]

export default function MockTestList() {
  return (
    <ListingContainer
      header="Mock Tests"
      subheader="View and manage all your created mock tests"
      searchPlaceholder="Search mock tests..."
      items={mockTests}
      renderItem={(mock) => (
        <ListingCard
          {...mock}
          onView={() => {
            /* ... */
          }}
          onEdit={() => {
            /* ... */
          }}
          onDownload={() => {
            /* ... */
          }}
          onDelete={() => {
            /* ... */
          }}
        />
      )}
    />
  );
}
