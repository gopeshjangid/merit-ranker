"use client"

import {
  Timer,
  ListChecks,
  Clock,
} from "lucide-react"
import { CustomTabs } from "@/components/ui/custom-tabs"
import { MockTestCreator } from "@/components/mock-test/mock-test-creator"

export default function CreateMockPage() {
  const tabs = [
    {
      value: "mock",
      label: "Mock Test",
      icon: Timer,
      content: <MockTestCreator type="mock" />,
    },
    {
      value: "quiz",
      label: "Quick Quiz",
      icon: ListChecks,
      content: <MockTestCreator type="quiz" />,
    },
    {
      value: "test-series",
      label: "Test Series",
      icon: Clock,
      content: <MockTestCreator type="test-series" />,
    },
  ]

  return (
    <div className="space-y-6">
      <CustomTabs
        tabs={tabs}
        defaultValue="mock"
        className="w-full"
        tabsListClassName="max-w-lg"
        tabsTriggerClassName="gap-2"
      />
    </div>
  )
}