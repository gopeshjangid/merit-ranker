import type React from "react"
import { GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TipsCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-primary" />
          <CardTitle className="text-sm font-medium">Tips</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-xs text-muted-foreground space-y-2">
        <p>• Use AI Help to seed questions faster from your notes and context.</p>
        <p>• Target exam patterns by adjusting difficulty and time.</p>
        <p>• You can mix manually crafted and generated questions.</p>
      </CardContent>
    </Card>
  )
}