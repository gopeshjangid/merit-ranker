'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function ListingFilters({
  onChange,
}: {
  onChange?: (filters: { subject?: string; exam?: string }) => void
}) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2 w-full sm:w-auto">
      {/* Subject Filter - Full width on mobile, auto on desktop */}
      <Select onValueChange={(value) => onChange?.({ subject: value })}>
        <SelectTrigger className="w-full sm:w-[140px] h-10">
          <SelectValue placeholder="All Subjects" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Subjects</SelectItem>
          <SelectItem value="polity">Polity</SelectItem>
          <SelectItem value="economy">Economy</SelectItem>
          <SelectItem value="geography">Geography</SelectItem>
        </SelectContent>
      </Select>

      {/* Exam Filter - Full width on mobile, auto on desktop */}
      <Select onValueChange={(value) => onChange?.({ exam: value })}>
        <SelectTrigger className="w-full sm:w-[120px] h-10">
          <SelectValue placeholder="All Exams" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Exams</SelectItem>
          <SelectItem value="upsc">UPSC</SelectItem>
          <SelectItem value="ssc-cgl">SSC CGL</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}