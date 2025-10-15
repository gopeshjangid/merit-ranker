'use client'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ListingActions } from './listing-actions'

export interface ListingCardProps {
  icon?: React.ReactNode
  title: string
  tags?: string[]
  slidesCount?: number
  date?: string
  onView?: () => void
  onEdit?: () => void
  onDownload?: () => void
  onDelete?: () => void
}

export function ListingCard({
  icon,
  title,
  tags = [],
  slidesCount,
  date,
  onView,
  onEdit,
  onDownload,
  onDelete,
}: ListingCardProps) {
  return (
    <Card  className="rounded-xl overflow-hidden">
      <CardHeader className="flex flex-col items-center justify-center py-8">
        {icon ?? <span className="text-4xl">📄</span>}
      </CardHeader>
      <CardContent className="bg-opacity-10">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <div className="flex gap-2 mt-2 mb-2 flex-wrap">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded bg-muted text-xs">{tag}</span>
          ))}
        </div>
        <CardDescription className="flex gap-4 text-xs">
          <span>{slidesCount} slides</span>
          <span>{date}</span>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm" onClick={onView}>View</Button>
        <ListingActions onEdit={onEdit} onDownload={onDownload} onDelete={onDelete} />
      </CardFooter>
    </Card>
  )
}