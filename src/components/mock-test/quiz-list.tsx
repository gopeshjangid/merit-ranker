'use client'
import { ListingContainer } from '@/components/listing/listing-container'
import { ListingCard } from '@/components/listing/listing-card'

const quizzes = [
  { id: 1, documentId: '1', title: 'General Studies Quiz', tags: ['GS', 'Quiz'], questionsCount: 20, date: 'Oct 14' },
  { id: 2, documentId: '2', title: 'Maths Practice Quiz', tags: ['Maths', 'Quiz'], questionsCount: 15, date: 'Oct 15' },
  { id: 3, documentId: '3', title: 'Reasoning Quiz', tags: ['Reasoning', 'Quiz'], questionsCount: 18, date: 'Oct 16' },
  { id: 4, documentId: '4', title: 'English Language Quiz', tags: ['English', 'Quiz'], questionsCount: 22, date: 'Oct 17' },
  { id: 5, documentId: '5', title: 'Computer Awareness Quiz', tags: ['Computer', 'Quiz'], questionsCount: 16, date: 'Oct 18' },
  { id: 6, documentId: '6', title: 'Current Affairs Quiz', tags: ['Current Affairs', 'Quiz'], questionsCount: 25, date: 'Oct 19' },
  { id: 7, documentId: '7', title: 'Polity Quiz', tags: ['Polity', 'Quiz'], questionsCount: 14, date: 'Oct 20' },
  { id: 8, documentId: '8', title: 'Economy Quiz', tags: ['Economy', 'Quiz'], questionsCount: 19, date: 'Oct 21' },
  { id: 9, documentId: '9', title: 'Geography Quiz', tags: ['Geography', 'Quiz'], questionsCount: 17, date: 'Oct 22' },
  { id: 10, documentId: '10', title: 'History Quiz', tags: ['History', 'Quiz'], questionsCount: 21, date: 'Oct 23' },
  { id: 11, documentId: '11', title: 'Science Quiz', tags: ['Science', 'Quiz'], questionsCount: 20, date: 'Oct 24' },
  { id: 12, documentId: '12', title: 'Mixed GK Quiz', tags: ['GK', 'Quiz'], questionsCount: 23, date: 'Oct 25' },
]

export default function QuizList() {
  return (
    <ListingContainer
      header="Quizzes"
      subheader="View and manage all your created quizzes"
      searchPlaceholder="Search quizzes..."
      items={quizzes}
      renderItem={quiz => (
        <ListingCard
          {...quiz}
          onView={() => {/* ... */ }}
          onEdit={() => {/* ... */ }}
          onDownload={() => {/* ... */ }}
          onDelete={() => {/* ... */ }}
        />
      )}
    />
  )
}