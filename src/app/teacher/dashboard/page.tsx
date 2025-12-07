import Link from 'next/link';
import {
  FileQuestion,
  FileSpreadsheet,
  Users,
  Plus,
  Calendar,
  Clock,
  TrendingUp,
  NotebookText,
  Video,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TeacherDashboardHome() {
  const stats = [
    { label: 'Notes', value: '24', icon: NotebookText, accent: 'from-cyan-500 to-blue-500' },
    { label: 'Mocks', value: '12', icon: FileSpreadsheet, accent: 'from-emerald-500 to-teal-500' },
    { label: 'Quizzes', value: '38', icon: FileQuestion, accent: 'from-violet-500 to-purple-500' },
    { label: 'Students', value: '156', icon: Users, accent: 'from-amber-500 to-orange-500' },
  ];

  const quickActions = [
    { href: '/teacher/dashboard/notes', label: 'Create Notes', desc: 'AI-powered notes', icon: NotebookText },
    { href: '/teacher/dashboard/create-mock', label: 'Create Mock', desc: 'Full exam', icon: FileSpreadsheet },
    { href: '/teacher/dashboard/quizzes/create', label: 'Create Quiz', desc: 'Quick test', icon: FileQuestion },
    { href: '/teacher/dashboard/live-class/presentation', label: 'Go Live', desc: 'Start class', icon: Video },
  ];

  const schedule = [
    { title: 'SSC CGL Mock Review', time: '10:00 AM', type: 'Live' },
    { title: 'Reasoning - Series', time: '2:00 PM', type: 'Live' },
  ];

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Welcome Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl font-semibold">
          <span className="gradient-text">Good morning</span> 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          What would you like to create today?
        </p>
      </div>

      {/* Quick Stats - Futuristic Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-lg bg-card/50 dark:bg-slate-800/50 border border-border dark:border-cyan-500/20 p-4 group hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <stat.icon className={`h-5 w-5 bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`} style={{ color: 'hsl(var(--primary))' }} />
            </div>
            <div className={`text-2xl font-bold bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}>
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground mt-1">+3 this week</div>
            {/* Glow effect */}
            <div className={`absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r ${stat.accent} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`} />
          </div>
        ))}
      </div>

      {/* Quick Actions - Futuristic Buttons */}
      <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-sm font-medium text-muted-foreground mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link key={action.label} href={action.href} className="group">
              <div className="h-full relative overflow-hidden rounded-lg bg-card/50 dark:bg-slate-800/50 border border-border dark:border-cyan-500/20 p-5 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <action.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{action.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{action.desc}</p>
                {/* Glow */}
                <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 blur-xl group-hover:opacity-25 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        {/* Today's Schedule */}
        <div className="relative overflow-hidden rounded-lg bg-card/50 dark:bg-slate-800/50 border border-border dark:border-cyan-500/20 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Today&apos;s Schedule
            </h3>
            <Button variant="ghost" size="sm" asChild className="text-xs text-muted-foreground hover:text-primary">
              <Link href="/teacher/dashboard/schedule">View all</Link>
            </Button>
          </div>
          <div className="space-y-3">
            {schedule.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 dark:bg-slate-700/30 border border-border/50 dark:border-cyan-500/10 hover:border-primary/30 transition-colors"
              >
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {item.time}
                  </p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
                  {item.type}
                </span>
              </div>
            ))}
            {schedule.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">No classes today</p>
            )}
          </div>
          {/* Glow */}
          <div className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 blur-xl" />
        </div>

        {/* Getting Started */}
        <div className="relative overflow-hidden rounded-lg bg-card/50 dark:bg-slate-800/50 border border-border dark:border-cyan-500/20 p-5">
          <h3 className="font-medium text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Getting Started
          </h3>
          <div className="space-y-3">
            <Link href="/teacher/dashboard/notes" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 dark:bg-slate-700/30 border border-border/50 dark:border-cyan-500/10 hover:border-primary/30 transition-all group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <Plus className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Create your first note</p>
                <p className="text-xs text-muted-foreground">Use AI to generate study material</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link href="/teacher/dashboard/students" className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 dark:bg-slate-700/30 border border-border/50 dark:border-cyan-500/10 hover:border-primary/30 transition-all group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Invite students</p>
                <p className="text-xs text-muted-foreground">Share your content with learners</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
          {/* Glow */}
          <div className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 opacity-10 blur-xl" />
        </div>
      </div>
    </div>
  );
}
