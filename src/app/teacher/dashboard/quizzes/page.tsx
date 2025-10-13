export default function QuizzesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Create Quiz</h1>
        <button className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground">New Quiz</button>
      </div>
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        No quizzes yet. Create one to get started.
      </div>
    </div>
  )
}
