"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Link from "next/link"

export default function AboutError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("About Page Error:", error)
  }, [error])

  return (
    <div className="container mx-auto py-20 px-4 text-center min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center">
      <Info className="h-16 w-16 text-red-500 mb-4" />
      <h2 className="text-3xl font-bold text-red-400 mb-3">Error Loading About Page</h2>
      <p className="text-slate-300 mb-6 max-w-md">We couldn't load information about us right now. Please try again.</p>
      {process.env.NODE_ENV === "development" && error?.message && (
        <pre className="mb-4 p-2 bg-slate-800 text-left text-xs rounded max-w-xl overflow-auto">
          {error.message}
          {error.digest && `\nDigest: ${error.digest}`}
        </pre>
      )}
      <Button onClick={() => reset()} className="bg-cyan-500 hover:bg-cyan-600 text-white">
        Try Again
      </Button>
      <Link href="/" className="mt-4 text-cyan-400 hover:text-cyan-300">
        Go to Homepage
      </Link>
    </div>
  )
}
