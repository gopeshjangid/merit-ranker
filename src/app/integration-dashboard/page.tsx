import { getVercelProjects } from "@/app/lib/vercel-api"
import { parseSampleRcssData } from "@/app/lib/gsma-parser"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Integration Dashboard - eSIM Myanmar",
  description: "View conceptual integration data for Vercel projects and GSMA RCSS information for eSIM Myanmar.",
  robots: {
    // Discourage indexing for this internal-facing/conceptual page
    index: false,
    follow: false,
  },
}

export default async function IntegrationDashboardPage() {
  const vercelData = await getVercelProjects()
  const rcssData = await parseSampleRcssData()

  return (
    <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold gradient-text">Integration Dashboard</h1>
        <p className="text-xl text-foreground/70 mt-2">Conceptual overview of Vercel & GSMA RCSS Data</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Vercel Projects</CardTitle>
            <CardDescription>Data fetched from Vercel API (or mock)</CardDescription>
          </CardHeader>
          <CardContent>
            {vercelData.needsToken && (
              <Alert variant="default" className="mb-4 border-yellow-500/50 text-yellow-500">
                <Terminal className="h-4 w-4 !text-yellow-500" />
                <AlertTitle>Configuration Needed</AlertTitle>
                <AlertDescription>
                  VERCEL_ACCESS_TOKEN is not set. Displaying mock data. Set the environment variable for live data.
                </AlertDescription>
              </Alert>
            )}
            {vercelData.error && !vercelData.needsToken && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{vercelData.error}</AlertDescription>
              </Alert>
            )}
            {vercelData.projects && vercelData.projects.length > 0 ? (
              <ul className="space-y-2">
                {vercelData.projects.map((project) => (
                  <li key={project.id} className="p-2 border rounded-md">
                    <p className="font-semibold">{project.name}</p>
                    <p className="text-sm text-foreground/70">Framework: {project.framework}</p>
                    <p className="text-sm text-foreground/70">
                      Last Updated: {new Date(project.updatedAt).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              !vercelData.error && <p>No projects found.</p>
            )}
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>GSMA RCSS Data (Sample)</CardTitle>
            <CardDescription>Parsed from a sample RCSS XML string</CardDescription>
          </CardHeader>
          <CardContent>
            {rcssData.error && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{rcssData.error}</AlertDescription>
              </Alert>
            )}
            {rcssData.RCSSProfileManagementRequest ? (
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                {JSON.stringify(rcssData.RCSSProfileManagementRequest, null, 2)}
              </pre>
            ) : (
              !rcssData.error && <p>No RCSS data parsed.</p>
            )}
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 text-center text-sm text-foreground/60">
        <p>
          This dashboard provides a conceptual demonstration. A full integration requires robust error handling,
          security measures, and potentially a dedicated backend service for complex synchronization logic.
        </p>
      </div>
    </div>
  )
}
