import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FuturisticCard } from "@/components/ui/futuristic-card"
import { Youtube, Instagram, MessageCircle, Send, CheckCircle2, GraduationCap, Globe } from "lucide-react"

interface ProfileHeaderProps {
    teacher: any
}

export function ProfileHeader({ teacher }: ProfileHeaderProps) {
    return (
        <div className="w-full space-y-8">
            <FuturisticCard className="border-border/50 dark:border-cyan-500/20 bg-card/80 dark:bg-slate-900/40 relative overflow-hidden p-8 md:p-12 shadow-sm dark:shadow-none">
                {/* Background Gradient - Dark only or subtle in light */}
                <div className="absolute top-0 right-0 -m-16 h-64 w-64 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl z-0" />

                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Avatar Section */}
                    <div className="flex-shrink-0 text-center md:text-left">
                        <div className="relative inline-block">
                            <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-cyan-500/30 shadow-xl shadow-cyan-500/10">
                                <AvatarImage src={teacher.avatar} alt={teacher.name} />
                                <AvatarFallback>{teacher.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="absolute bottom-2 right-2 bg-green-500 h-5 w-5 rounded-full border-4 border-slate-900" title="Online" />
                        </div>

                        {/* Socials Mobile */}
                        <div className="flex md:hidden items-center justify-center gap-3 mt-4">
                            <SocialButton icon={<Youtube className="h-5 w-5" />} href={teacher.socials.youtube} color="hover:text-red-500 hover:bg-red-500/10" />
                            <SocialButton icon={<Instagram className="h-5 w-5" />} href={teacher.socials.instagram} color="hover:text-pink-500 hover:bg-pink-500/10" />
                            <SocialButton icon={<Send className="h-5 w-5" />} href={teacher.socials.telegram} color="hover:text-blue-500 hover:bg-blue-500/10" />
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 text-center md:text-left space-y-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                                {teacher.name}
                            </h1>
                            <p className="text-cyan-600 dark:text-cyan-400 font-medium text-lg mt-1">{teacher.tagline}</p>
                        </div>

                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                            {teacher.bio}
                        </p>

                        {/* Teaching Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 border-y border-border dark:border-white/5 py-4 my-4">
                            <StatItem label="Students" value={teacher.stats.students} />
                            <StatItem label="Views" value={teacher.stats.views} />
                            <StatItem label="Selections" value={teacher.stats.selections} />
                        </div>

                        {/* Chips */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20">
                                <GraduationCap className="h-3.5 w-3.5 mr-1" />
                                {teacher.experience} Exp
                            </Badge>
                            {teacher.subjects.map((sub: string) => (
                                <Badge key={sub} variant="outline" className="border-border dark:border-white/10 text-muted-foreground dark:text-slate-300">
                                    {sub}
                                </Badge>
                            ))}
                            <Badge variant="outline" className="border-border dark:border-white/10 text-muted-foreground dark:text-slate-300">
                                {teacher.languages.join(", ")}
                            </Badge>
                        </div>

                        {/* Socials Desktop */}
                        <div className="hidden md:flex items-center gap-3 pt-2">
                            <SocialButton icon={<Youtube className="h-5 w-5" />} href={teacher.socials.youtube} label="YouTube" color="hover:text-red-500 hover:bg-red-500/10" />
                            <SocialButton icon={<Instagram className="h-5 w-5" />} href={teacher.socials.instagram} label="Instagram" color="hover:text-pink-500 hover:bg-pink-500/10" />
                            <SocialButton icon={<Send className="h-5 w-5" />} href={teacher.socials.telegram} label="Telegram" color="hover:text-blue-500 hover:bg-blue-500/10" />
                            <SocialButton icon={<Globe className="h-5 w-5" />} href="#" label="Website" color="hover:text-purple-500 hover:bg-purple-500/10" />
                        </div>
                    </div>
                </div>
            </FuturisticCard>
        </div>
    )
}

function StatItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="text-center md:text-left">
            <div className="text-xl font-bold text-foreground">{value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
        </div>
    )
}

function SocialButton({ icon, href, label, color }: any) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size={label ? "sm" : "icon"} className={`text-muted-foreground ${color} transition-all`}>
                {icon}
                {label && <span className="ml-2">{label}</span>}
            </Button>
        </a>
    )
}
