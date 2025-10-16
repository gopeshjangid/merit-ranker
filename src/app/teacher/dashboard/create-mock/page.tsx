"use client"

import type React from "react"
import { Timer, ListChecks } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCreateMockStore } from "@/states/mock-test-state";
import { QuestionList } from "@/components/mock-test/question-list"
import { AttachNotes } from "@/components/mock-test/attach-notes"
import { AIHelpPanel } from "@/components/mock-test/ai-help-panel"
import { LiveMockSettings } from "@/components/mock-test/live-mock-settings"
import { PreviewPanel } from "@/components/mock-test/preview-panel"
import { TipsCard } from "@/components/mock-test/tips-card"
import { QuizForm } from "@/components/mock-test/quiz-form"

export default function CreateMockPage() {
  const activeTab = useCreateMockStore((state) => state.activeTab)
  const setActiveTab = useCreateMockStore((state) => state.setActiveTab)
  const aiNotesPdf = useCreateMockStore((state) => state.aiNotesPdf)
  const qNotesPdf = useCreateMockStore((state) => state.qNotesPdf)
  const setAiNotesPdf = useCreateMockStore((state) => state.setAiNotesPdf)
  const setQNotesPdf = useCreateMockStore((state) => state.setQNotesPdf)

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">Create Mock</h1>
        <Badge variant="secondary" className="text-xs">Design-only. No backend integration.</Badge>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "live" | "quiz")} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="live" className="gap-2">
            <Timer className="h-4 w-4" />
            Live Mock Test
          </TabsTrigger>
          <TabsTrigger value="quiz" className="gap-2">
            <ListChecks className="h-4 w-4" />
            Create Quiz
          </TabsTrigger>
        </TabsList>

        {/* Live Mock Test Content */}
        <TabsContent value="live" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Question List with AI actions */}
            <aside className="space-y-4">
              <QuestionList idPrefix="live-" />
              <AttachNotes file={aiNotesPdf} onFileChange={setAiNotesPdf} />
            </aside>

            {/* Middle: AI Help + Live Mock Settings */}
            <div className="lg:col-span-2 space-y-6">
              <AIHelpPanel />
              <LiveMockSettings />
            </div>

            {/* Right: Preview / Actions */}
            <aside className="lg:col-span-1 space-y-4">
              <PreviewPanel />
              <TipsCard />
            </aside>
          </div>
        </TabsContent>

        {/* Create Quiz Content */}
        <TabsContent value="quiz" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Question List with AI actions */}
            <aside className="space-y-4">
              <QuestionList idPrefix="quiz-" />
              <AttachNotes file={qNotesPdf} onFileChange={setQNotesPdf} />
            </aside>

            {/* Center: Create Quiz form */}
            <div className="lg:col-span-2 space-y-6">
              <QuizForm />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}