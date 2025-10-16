import type React from "react"
import { FileText } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AttachNotesProps {
  file: File | null
  onFileChange: (file: File | null) => void
}

export function AttachNotes({ file, onFileChange }: AttachNotesProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          <CardTitle className="text-sm font-medium">Attach Notes / PDF</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Input
          type="file"
          accept="application/pdf"
          onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          className="text-xs"
          aria-label="Upload a PDF with your notes"
        />
        <p className="text-xs text-muted-foreground">
          {file ? `Attached: ${file.name}` : "No file selected"}
        </p>
        <p className="text-xs text-muted-foreground">File is not uploaded (UI-only).</p>
      </CardContent>
    </Card>
  )
}