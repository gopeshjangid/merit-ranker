'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { useEffect, useState } from "react"

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
  value?: string
  onValueChange?: (value: string) => void
}

export function CustomTabs({
  tabs,
  defaultValue,
  className,
  tabsListClassName,
  tabsTriggerClassName,
  tabsContentClassName,
  value: externalValue,
  onValueChange: externalOnValueChange,
}: CustomTabsProps) {

  const [internalValue, setInternalValue] = useState(defaultValue)

  const isControlled = externalValue !== undefined && externalOnValueChange !== undefined
  const currentValue = isControlled ? externalValue : internalValue

  const handleValueChange = (newValue: string) => {
    if (isControlled) {
      externalOnValueChange!(newValue)
    } else {
      setInternalValue(newValue)
    }
  }

  useEffect(() => {
    if (isControlled && externalValue !== internalValue) {
      setInternalValue(externalValue)
    }
  }, [externalValue, isControlled, internalValue])

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Tabs defaultValue={defaultValue} value={currentValue} onValueChange={handleValueChange}>
        <TabsList
          className={cn(
            "inline-flex h-10 items-center justify-start rounded-lg bg-muted p-1 gap-1",
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
                  "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all",
                  "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
                  "data-[state=inactive]:text-muted-foreground hover:data-[state=inactive]:text-foreground",
                  tabsTriggerClassName
                )}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {tab.label}
              </TabsTrigger>
            )
          })}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className={cn("mt-4", tabsContentClassName)}
          >
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}