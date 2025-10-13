export default function TeacherDashboardHome() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Welcome, Teacher</h1>
      <p className="text-muted-foreground">
        Manage notes, quizzes, mock tests, and your Telegram student interactions from one place.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a href="/teacher/dashboard/notes" className="rounded-lg border p-4 hover:bg-muted/40">
          <div className="text-sm font-medium">Notes Maker</div>
          <p className="text-xs text-muted-foreground mt-1">Create and organize subject notes.</p>
        </a>
        <a href="/teacher/dashboard/quizzes" className="rounded-lg border p-4 hover:bg-muted/40">
          <div className="text-sm font-medium">Create Quiz</div>
          <p className="text-xs text-muted-foreground mt-1">Build quick topic quizzes.</p>
        </a>
        <a href="/teacher/dashboard/mocks" className="rounded-lg border p-4 hover:bg-muted/40">
          <div className="text-sm font-medium">Mock Tests</div>
          <p className="text-xs text-muted-foreground mt-1">Design full-length practice tests.</p>
        </a>
        <a href="/teacher/dashboard/students" className="rounded-lg border p-4 hover:bg-muted/40">
          <div className="text-sm font-medium">Students</div>
          <p className="text-xs text-muted-foreground mt-1">Answer questions and publish solutions.</p>
        </a>
        <a href="/teacher/dashboard/settings" className="rounded-lg border p-4 hover:bg-muted/40">
          <div className="text-sm font-medium">Profile Settings</div>
          <p className="text-xs text-muted-foreground mt-1">Manage your profile and branding.</p>
        </a>
      </div>
    </section>
  )
}
