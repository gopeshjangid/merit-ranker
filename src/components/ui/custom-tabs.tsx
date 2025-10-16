'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface TabItem {
  value: string
  label: string
  icon?: LucideIcon
  content: React.ReactNode
}

interface CustomTabsProps {
  tabs: TabItem[]
  defaultValue: string
  className?: string
  tabsListClassName?: string
  tabsTriggerClassName?: string
  tabsContentClassName?: string
}

export function CustomTabs({
  tabs,
  defaultValue,
  className,
  tabsListClassName,
  tabsTriggerClassName,
  tabsContentClassName,
}: CustomTabsProps) {
  return (
    <div  className={cn("flex flex-col gap-6", className)}>
    <Tabs defaultValue={defaultValue}>
      <TabsList
        className={cn(
          "rounded-xl p-1 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-800 border border-blue-800",
          tabsListClassName
        )}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "flex items-center gap-2 rounded-xl px-8 text-lg font-medium transition-colors",
                "data-[state=active]:bg-blue-700 data-[state=active]:text-white",
                "data-[state=inactive]:bg-transparent data-[state=inactive]:text-blue-200",
                tabsTriggerClassName
              )}
            >
              {Icon && <Icon className="w-5 h-5 mr-2" />}
              {tab.label}
            </TabsTrigger>
          )
        })}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className={cn("mt-6", tabsContentClassName)}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
    </div>
  )
}