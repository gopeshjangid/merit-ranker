import { Button } from "@/components/ui/button"
import { FuturisticCard } from "@/components/ui/futuristic-card"
import { Video, FileText, Share2, MessageCircle, ExternalLink, Calendar, HelpCircle } from "lucide-react"

interface LinkInBioProps {
    quickLinks: any[]
}

export function LinkInBio({ quickLinks }: LinkInBioProps) {
    const getIcon = (type: string) => {
        switch (type) {
            case 'live': return <Video className="h-5 w-5 text-red-500 animate-pulse" />
            case 'pdf': return <FileText className="h-5 w-5 text-orange-500" />
            case 'social': return <ExternalLink className="h-5 w-5 text-blue-500" />
            case 'action': return <HelpCircle className="h-5 w-5 text-cyan-500" />
            default: return <ExternalLink className="h-5 w-5" />
        }
    }

    return (
        <div className="grid gap-4">
            {quickLinks.map((link, idx) => (
                <a
                    key={idx}
                    href={link.url}
                    className={`group relative flex items-center p-4 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
            ${link.highlight
                            ? 'bg-gradient-to-r from-red-50 to-white dark:from-red-900/20 dark:to-slate-900 border-red-200 dark:border-red-500/50 shadow-sm dark:shadow-red-500/10'
                            : 'bg-card/50 dark:bg-slate-800/50 border-border dark:border-cyan-500/20 hover:border-cyan-500/50 shadow-sm dark:shadow-none'
                        }`}
                >
                    <div className={`p-3 rounded-full mr-4 ${link.highlight ? 'bg-red-100 dark:bg-red-500/20' : 'bg-slate-100 dark:bg-slate-700/50'}`}>
                        {getIcon(link.type)}
                    </div>
                    <div className="flex-1">
                        <h3 className={`font-semibold ${link.highlight ? 'text-red-400' : 'text-foreground group-hover:text-cyan-400 decoration-cyan-400'}`}>
                            {link.title}
                        </h3>
                        {link.type === 'live' && (
                            <p className="text-xs text-red-400 font-medium mt-0.5 flex items-center gap-1">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                Live Now
                            </p>
                        )}
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
            ))}

            {/* Share Button (Mock functionality) */}
            <Button variant="outline" className="w-full mt-2 border-dashed border-slate-600 hover:border-cyan-500 text-muted-foreground hover:text-cyan-500">
                <Share2 className="mr-2 h-4 w-4" /> Share Profile
            </Button>
        </div>
    )
}
