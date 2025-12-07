import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users } from "lucide-react"

interface ScheduleSectionProps {
    schedule: any[]
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
    return (
        <div className="rounded-xl border border-border dark:border-cyan-500/20 bg-slate-100 dark:bg-slate-900/30 overflow-hidden">
            <div className="p-4 bg-slate-200/50 dark:bg-slate-900/50 flex items-center justify-between border-b border-border dark:border-cyan-500/10">
                <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-cyan-500" />
                    <h2 className="font-semibold text-foreground">Upcoming Schedule</h2>
                </div>
                <Badge variant="outline" className="text-[10px] border-cyan-500/30 text-cyan-500">Live Classes</Badge>
            </div>

            <div className="p-2 space-y-1">
                {schedule.map((slot, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors group">
                        <div className="flex-shrink-0 w-14 text-center">
                            <div className="text-xs font-bold text-muted-foreground uppercase">{slot.day}</div>
                            <div className="text-xs font-medium text-foreground">{slot.time.split(' ')[0]}</div>
                        </div>

                        <div className="h-8 w-1 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500 transition-colors" />

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                                <h4 className="text-sm font-medium text-foreground truncate">{slot.topic}</h4>
                                {slot.type === 'Live' && (
                                    <span className="flex h-1.5 w-1.5 rounded-full bg-red-500" title="Live Class" />
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                {slot.type === 'Test' ? <Clock className="h-3 w-3" /> : <Users className="h-3 w-3" />}
                                {slot.type} Session
                            </p>
                        </div>

                        <button className="px-3 py-1.5 text-xs font-medium bg-cyan-500/10 text-cyan-500 rounded-md hover:bg-cyan-500 hover:text-white transition-colors">
                            Notify
                        </button>
                    </div>
                ))}

                <div className="p-2">
                    <button className="w-full py-2 text-xs text-center text-muted-foreground border border-dashed border-border rounded-lg hover:border-cyan-500 hover:text-cyan-500 transition-colors">
                        View Full Calendar
                    </button>
                </div>
            </div>
        </div>
    )
}
