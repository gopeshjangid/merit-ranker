import { ReactNode } from "react"

export function FuturisticCard({
    children,
    className = "",
    glowColor = "from-cyan-500 to-blue-500"
}: {
    children: ReactNode
    className?: string
    glowColor?: string
}) {
    return (
        <div className={`relative overflow-hidden rounded-lg bg-card/50 dark:bg-slate-800/50 border border-border dark:border-cyan-500/20 p-5 ${className}`}>
            {children}
            <div className={`absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-gradient-to-r ${glowColor} opacity-10 blur-xl`} />
        </div>
    )
}
