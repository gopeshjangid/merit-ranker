"use client"

import { Timer, ListChecks } from "lucide-react"
import { QuestionList } from "@/components/mock-test/question-list"
import { AIHelpPanel } from "@/components/mock-test/ai-help-panel"
import { LiveMockSettings } from "@/components/mock-test/live-mock-settings"
import { PreviewPanel } from "@/components/mock-test/preview-panel"
import { TipsCard } from "@/components/mock-test/tips-card"
import { QuizForm } from "@/components/mock-test/quiz-form"
import { CustomTabs } from "@/components/ui/custom-tabs"

export default function CreateMockPage() {

  const tabs = [
    {
      value: "live",
      label: "Live Mock Test",
      icon: Timer,
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Question List with AI actions */}
          <aside className="space-y-4">
            <QuestionList idPrefix="live-" />
            <PreviewPanel />
            <TipsCard />
          </aside>
          {/* Middle: AI Help + Live Mock Settings */}
          <div className="lg:col-span-2 space-y-6">
            <AIHelpPanel />
            <LiveMockSettings />
          </div>
        </div>
      ),
    },
    {
      value: "quiz",
      label: "Create Quiz",
      icon: ListChecks,
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Question List with AI actions */}
          <aside className="space-y-4">
            <QuestionList idPrefix="quiz-" />
          </aside>
          {/* Center: Create Quiz form */}
          <div className="lg:col-span-2 space-y-6">
            <QuizForm />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <CustomTabs
        tabs={tabs}
        defaultValue='live'
        className="w-full"
        tabsListClassName="max-w-md"
        tabsTriggerClassName="gap-2"
      />
    </div>
  )
}