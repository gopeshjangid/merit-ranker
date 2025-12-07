import { Award, Star, Quote, Trophy } from "lucide-react"

interface PortfolioSectionProps {
    achievements: string[]
}

export function PortfolioSection({ achievements }: PortfolioSectionProps) {
    return (
        <div className="space-y-8">
            {/* Achievements Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <h2 className="text-xl font-bold gradient-text">Achievements & Results</h2>
                </div>
                <div className="space-y-3">
                    {achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-amber-50/50 dark:bg-card/30 border border-amber-200 dark:border-yellow-500/20 shadow-sm dark:shadow-none hover:shadow-md transition-all">
                            <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" fillOpacity={0.2} />
                            <span className="text-sm font-medium text-foreground">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Quote className="h-5 w-5 text-indigo-500" />
                    <h2 className="text-xl font-bold text-foreground">Student Love</h2>
                </div>
                <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/20 dark:to-slate-900/40 border border-indigo-100 dark:border-indigo-500/20 shadow-sm">
                    <Quote className="absolute top-6 left-6 h-10 w-10 text-indigo-200 dark:text-indigo-500/20 rotate-180" />
                    <div className="relative z-10 pl-8 md:pl-10">
                        <p className="text-base md:text-lg italic text-slate-600 dark:text-slate-300 leading-relaxed">
                            "Sir's teaching style is amazing. I was weak in Physics but his concept visualization helped me score 95/100 in JEE Mains. Best teacher ever!"
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold">
                                RS
                            </div>
                            <div>
                                <div className="text-sm font-bold text-foreground">Rahul Sharma</div>
                                <div className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">IIT Bombay (CSE)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
