import { Button } from "@/components/ui/button"
import { FileText, Download, FolderOpen, ArrowRight } from "lucide-react"

interface ResourcesSectionProps {
    resources: any[]
}

export function ResourcesSection({ resources }: ResourcesSectionProps) {
    return (
        <div className="rounded-xl border border-cyan-500/20 bg-card/50 dark:bg-slate-900/30 overflow-hidden shadow-sm dark:shadow-none">
            <div className="p-4 border-b border-border dark:border-white/5 bg-muted/30 dark:bg-slate-900/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FolderOpen className="h-5 w-5 text-orange-400" />
                    <h2 className="font-semibold text-lg text-foreground">Free Study Materials</h2>
                </div>
                <Button variant="ghost" size="sm" className="text-xs text-cyan-500 hover:text-cyan-400">
                    View All <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
            </div>

            <div className="divide-y divide-border dark:divide-white/5">
                {resources.map((res, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 hover:bg-muted/50 dark:hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-red-100 dark:bg-red-500/10 flex items-center justify-center">
                                <FileText className="h-5 w-5 text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-foreground">{res.title}</h3>
                                <p className="text-xs text-muted-foreground">{res.size} • {res.downloads} downloads</p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline" className="h-8 border-cyan-500/30 text-cyan-500 hover:bg-cyan-500/10">
                            <Download className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
