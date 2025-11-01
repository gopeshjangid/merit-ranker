import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  FileText, 
  Award, 
  Users, 
  Video, 
  BookOpen, 
  TrendingUp,
  Calendar,
  MessageSquare,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

// Stats data
const stats = [
  { label: 'Total Students', value: '1,234', change: '+12%', icon: Users, color: 'text-primary' },
  { label: 'Active Courses', value: '89', change: '+5', icon: BookOpen, color: 'text-violet-600' },
  { label: 'Avg. Rating', value: '4.9', change: '+0.2', icon: Award, color: 'text-amber-500' },
  { label: 'Classes This Month', value: '45', change: '+8', icon: Calendar, color: 'text-green-600' },
]

// Recent activities
const recentActivities = [
  { type: 'submission', title: '23 students submitted Quiz #12', time: '2 hours ago', icon: CheckCircle2, color: 'text-green-600' },
  { type: 'question', title: 'New question from Rahul Sharma', time: '4 hours ago', icon: MessageSquare, color: 'text-blue-600' },
  { type: 'class', title: 'Live class completed: Economics 101', time: '6 hours ago', icon: Video, color: 'text-violet-600' },
  { type: 'alert', title: 'Mock test grading pending (15 students)', time: '1 day ago', icon: AlertCircle, color: 'text-amber-600' },
]

// Course performance
const coursePerformance = [
  { name: 'Economics', students: 342, completion: 78, avgScore: 85 },
  { name: 'Political Science', students: 298, completion: 82, avgScore: 88 },
  { name: 'Current Affairs', students: 540, completion: 65, avgScore: 79 },
]

const dashboardCards = [
  {
    href: '/teacher/dashboard/notes',
    title: 'Create Notes',
    description: 'Create and organize subject notes.',
    icon: FileText,
    color: 'bg-primary/10 text-primary',
    badge: null,
  },
  {
    href: '/teacher/dashboard/live-class/presentation',
    title: 'Live Classes',
    description: 'Start or schedule live sessions.',
    icon: Video,
    color: 'bg-red-500/10 text-red-600',
    badge: 'Live',
  },
  {
    href: '/teacher/dashboard/quizzes',
    title: 'Create Quiz',
    description: 'Build quick topic quizzes.',
    icon: Award,
    color: 'bg-violet-500/10 text-violet-600',
    badge: null,
  },
  {
    href: '/teacher/dashboard/mocks',
    title: 'Mock Tests',
    description: 'Design full-length mock tests.',
    icon: BookOpen,
    color: 'bg-indigo-500/10 text-indigo-600',
    badge: null,
  },
  {
    href: '/teacher/dashboard/students',
    title: 'Students',
    description: 'Manage student queries and performance.',
    icon: Users,
    color: 'bg-green-500/10 text-green-600',
    badge: '3 new',
  },
  {
    href: '/teacher/dashboard/schedule',
    title: 'Schedule',
    description: 'View and manage your class schedule.',
    icon: Calendar,
    color: 'bg-blue-500/10 text-blue-600',
    badge: null,
  },
]

export default function TeacherDashboardHome() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="text-3xl font-bold">Welcome back, Dr. Sarah! 👋</h2>
        <p className="text-muted-foreground mt-1">Here's what's happening with your classes today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex size-10 items-center justify-center rounded-lg ${stat.color.replace('text-', 'bg-')}/10`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dashboardCards.map((card, index) => (
                <Link
                  key={index}
                  href={card.href}
                  className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${card.color}`}>
                        <card.icon className="h-6 w-6" />
                      </div>
                      {card.badge && (
                        <Badge 
                          variant={card.badge === 'Live' ? 'default' : 'secondary'}
                          className={card.badge === 'Live' ? 'animate-pulse bg-red-500' : ''}
                        >
                          {card.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Course Performance */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Course Performance</CardTitle>
                  <CardDescription>Student engagement and scores by course</CardDescription>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/teacher/dashboard/analytics">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View All
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {coursePerformance.map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium">{course.name}</span>
                      <span className="text-muted-foreground ml-2">({course.students} students)</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span>{course.completion}% completed</span>
                      <span className="font-medium text-foreground">{course.avgScore}% avg</span>
                    </div>
                  </div>
                  <Progress value={course.completion} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your classes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className={`flex size-9 shrink-0 items-center justify-center rounded-full ${activity.color.replace('text-', 'bg-')}/10`}>
                    <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.title}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your upcoming classes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg border">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Economics - Fiscal Policy</p>
                  <p className="text-xs text-muted-foreground mt-1">10:00 AM - 11:30 AM</p>
                  <p className="text-xs text-muted-foreground">342 students • Batch A</p>
                </div>
                <Badge variant="default" className="animate-pulse bg-red-500">Live</Badge>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg border">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                  <Video className="h-5 w-5 text-violet-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Political Science</p>
                  <p className="text-xs text-muted-foreground mt-1">2:00 PM - 3:30 PM</p>
                  <p className="text-xs text-muted-foreground">198 students • Batch B</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" size="sm" asChild>
                <Link href="/teacher/dashboard/schedule">View Full Schedule</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
