"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function MocksPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Mock Tests</h1>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Mock Test
        </Button>
      </div>
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        No mock tests yet. Create one to get started.
      </div>
    </div>
  )
}
