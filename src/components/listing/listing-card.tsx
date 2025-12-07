'use client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ListingActions } from './listing-actions'
import { FileText, Calendar, Layers } from 'lucide-react'

export interface ListingCardProps {
  title: string
  tags?: string[]
  slidesCount?: number
  questionsCount?: number
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
  questionsCount,
  date,
  onView,
  onEdit,
  onDownload,
  onDelete,
}: ListingCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card/50 dark:bg-slate-800/50 border border-border dark:border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
      {/* Icon Header */}
      <div className="flex items-center justify-center py-8 bg-muted/50 dark:bg-slate-900/30 border-b border-border dark:border-cyan-500/10 group-hover:bg-cyan-500/5 transition-colors">
        <div className="p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
          <FileText className="h-8 w-8 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      <div className="p-4">
        {/* Title */}
        <h3 className="text-base font-medium text-foreground truncate mb-2 group-hover:text-cyan-500 transition-colors">
          {title}
        </h3>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex gap-1.5 mb-3 flex-wrap">
            {tags.slice(0, 3).map(tag => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border-border dark:border-cyan-500/20"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5 border-border dark:border-cyan-500/20">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          {slidesCount !== undefined && (
            <div className="flex items-center gap-1">
              <Layers className="h-3.5 w-3.5" />
              <span>{slidesCount} pages</span>
            </div>
          )}
          {questionsCount !== undefined && (
            <div className="flex items-center gap-1">
              <Layers className="h-3.5 w-3.5" />
              <span>{questionsCount} Qs</span>
            </div>
          )}
          {date && (
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{date}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-border dark:border-cyan-500/10">
          <Button
            size="sm"
            variant="ghost"
            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 hover:bg-cyan-500/10"
            onClick={onView}
          >
            View
          </Button>
          <ListingActions onEdit={onEdit} onDownload={onDownload} onDelete={onDelete} />
        </div>
      </div>

      {/* Corner Glow */}
      <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}