'use client'
import { Button } from '@/components/ui/button'
import { Pencil, Download, Trash2 } from 'lucide-react'

export function ListingActions({
  onEdit,
  onDownload,
  onDelete,
}: {
  onEdit?: () => void
  onDownload?: () => void
  onDelete?: () => void
}) {
  return (
    <>
      <Button size="icon" variant="ghost" onClick={onEdit}>
        <Pencil className="w-4 h-4" />
      </Button>
      <Button size="icon" variant="ghost" onClick={onDownload}>
        <Download className="w-4 h-4" />
      </Button>
      <Button size="icon" variant="ghost" onClick={onDelete}>
        <Trash2 className="w-4 h-4" />
      </Button>
    </>
  )
}