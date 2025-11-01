"use client" // Error boundaries must be Client Components

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Error:", error)
  }, [error])

  return (
    // global-error must include html and body tags
    <html>
      <body className="bg-slate-900 text-slate-200">
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Something went wrong.</h1>
          <p className="text-lg text-slate-300 mb-8">We encountered an unexpected issue. Please try again.</p>
          {error?.message && process.env.NODE_ENV === "development" && (
            <pre className="mb-4 p-4 bg-slate-800 text-left text-sm rounded-md overflow-x-auto max-w-2xl">
              {error.message}
              {error.digest && `\nDigest: ${error.digest}`}
            </pre>
          )}
          <Button onClick={() => reset()} size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
            Try again
          </Button>
          <a href="/" className="mt-4 text-cyan-400 hover:text-cyan-300">
            Go back to Homepage
          </a>
        </div>
      </body>
    </html>
  )
}
