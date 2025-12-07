'use client';
import { ListingContainer } from '@/components/listing/listing-container';
import { ListingCard } from '@/components/listing/listing-card';

const testSeries = [
    { id: 1, documentId: '1', title: 'SSC CGL 2024 Full Series', tags: ['SSC', 'CGL', 'Series'], questionsCount: 2000, date: 'Oct 14' },
    { id: 2, documentId: '2', title: 'UPSC Prelims Master Series', tags: ['UPSC', 'Prelims'], questionsCount: 5000, date: 'Oct 15' },
    { id: 3, documentId: '3', title: 'Bank PO Ultimate Series', tags: ['Banking', 'PO'], questionsCount: 1500, date: 'Oct 16' },
    { id: 4, documentId: '4', title: 'Railway NTPC Crash Course', tags: ['Railway', 'NTPC'], questionsCount: 1000, date: 'Oct 17' },
];

export default function TestSeriesList() {
    return (
        <ListingContainer
            header="Test Series"
            subheader="View and manage all your test series"
            searchPlaceholder="Search test series..."
            items={testSeries}
            renderItem={(series) => (
                <ListingCard
                    {...series}
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
