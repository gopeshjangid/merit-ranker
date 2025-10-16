"use client"

import dynamic from "next/dynamic"
import { LayoutGrid, ListChecks } from "lucide-react"
import { CustomTabs } from "@/components/ui/custom-tabs"
import MockTestList from "@/components/mock-test/mock-test-list"
import { Skeleton } from "@/components/ui/skeleton"

const QuizList = dynamic(() => import("@/components/mock-test/quiz-list"), {
 loading: () => (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-10 w-32" />
    </div>
  ),
  ssr: false,
})

export default function MocksPage() {
  const tabs = [
    {
      value: "mock-list",
      label: "Mock Tests",
      icon: LayoutGrid,
      content: <MockTestList />,
    },
    {
      value: "quiz-list",
      label: "Quizzes",
      icon: ListChecks,
      content: <QuizList />,
    },
  ]

  return (
    <CustomTabs
      tabs={tabs}
      defaultValue="mock-list"
    />
  )
}