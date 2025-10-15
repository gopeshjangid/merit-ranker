'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ListingActions } from './listing-actions'
import { FileText, Calendar, Layers } from 'lucide-react'

export interface ListingCardProps {
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
    <Card  className="rounded-lg overflow-hidden">
      <CardHeader className="flex flex-col items-center justify-center py-8 border-b">
        <FileText className="w-16 h-16 text-white/80" />
      </CardHeader>
      <CardContent className="bg-opacity-10 py-2">
        <CardTitle className="text-md font-semibold truncate">{title}</CardTitle>
        <div className="flex gap-2 mt-2 mb-2 flex-wrap">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-200 hover:bg-slate-600">
              {tag}
            </Badge>
          ))}
        </div>
      <div className="flex items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1">
            <Layers className="w-4 h-4" />
            <span>{slidesCount} slides</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-between flex-end p-2 border-t mt-2">
        <Button size="sm" onClick={onView}>View</Button>
        <ListingActions onEdit={onEdit} onDownload={onDownload} onDelete={onDelete} />
      </div>
      </CardContent>      
    </Card>
  )
}