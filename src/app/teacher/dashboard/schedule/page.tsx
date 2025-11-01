"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, Users, Plus } from "lucide-react"

const upcomingClasses = [
  {
    id: 1,
    title: "Economics - Fiscal Policy",
    batch: "Batch A",
    time: "10:00 AM - 11:30 AM",
    date: "Today",
    students: 342,
    type: "Live",
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Political Science - Indian Constitution",
    batch: "Batch B",
    time: "2:00 PM - 3:30 PM",
    date: "Today",
    students: 198,
    type: "Live",
    color: "bg-red-500",
  },
  {
    id: 3,
    title: "Current Affairs Discussion",
    batch: "All Batches",
    time: "6:00 PM - 7:00 PM",
    date: "Tomorrow",
    students: 540,
    type: "Live",
    color: "bg-violet-500",
  },
  {
    id: 4,
    title: "Mock Test Analysis",
    batch: "Batch A",
    time: "10:00 AM - 12:00 PM",
    date: "Nov 3",
    students: 342,
    type: "Recorded",
    color: "bg-blue-500",
  },
]

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Class Schedule</h2>
          <p className="text-muted-foreground">Manage your upcoming and past classes</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Schedule New Class
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-muted-foreground">Classes This Week</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-red-500/10">
                <Video className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">2</div>
                <div className="text-xs text-muted-foreground">Live Today</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-violet-500/10">
                <Users className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">540</div>
                <div className="text-xs text-muted-foreground">Total Students</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-green-500/10">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">18h</div>
                <div className="text-xs text-muted-foreground">Teaching Hours</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Classes */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Classes</CardTitle>
          <CardDescription>Your scheduled classes for the coming days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingClasses.map((classItem) => (
              <div
                key={classItem.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${classItem.color}/10`}>
                    <Video className={`h-6 w-6 ${classItem.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{classItem.title}</h3>
                      <Badge variant={classItem.type === "Live" ? "default" : "secondary"} className={classItem.type === "Live" ? "animate-pulse" : ""}>
                        {classItem.type}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {classItem.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {classItem.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {classItem.students} students
                      </div>
                    </div>
                    <Badge variant="outline">{classItem.batch}</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  {classItem.type === "Live" && classItem.date === "Today" && (
                    <Button>Join Live</Button>
                  )}
                  <Button variant="outline">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
