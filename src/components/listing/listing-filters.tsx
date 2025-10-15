'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function ListingFilters({
  onChange,
}: {
  onChange?: (filters: { subject?: string; exam?: string }) => void
}) {
  return (
    <div className="flex gap-2">
      <Select onValueChange={val => onChange?.({ subject: val })}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="All Subjects" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Subjects</SelectItem>
          <SelectItem value="polity">Polity</SelectItem>
          <SelectItem value="economy">Economy</SelectItem>
          <SelectItem value="geography">Geography</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={val => onChange?.({ exam: val })}>
        <SelectTrigger className="w-40">
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