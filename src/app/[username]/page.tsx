import { DUMMY_TEACHER } from "@/lib/dummy-teacher-data"
import { ProfileHeader } from "@/components/profile/profile-header"
import { LinkInBio } from "@/components/profile/link-in-bio"
import { VideoShowcase } from "@/components/profile/video-showcase"
import { ResourcesSection } from "@/components/profile/resources-section"
import { PortfolioSection } from "@/components/profile/portfolio-section"
import { ScheduleSection } from "@/components/profile/schedule-section"
import { Metadata } from "next"

// Force dynamic rendering to handle username param
export const dynamic = "force-dynamic"

interface Props {
    params: { username: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const teacher = DUMMY_TEACHER // In real app, fetch(params.username)

    return {
        title: `${teacher.name} - ${teacher.tagline}`,
        description: teacher.bio,
        openGraph: {
            title: `${teacher.name} | Official Educator Profile`,
            description: teacher.bio,
            images: [teacher.banner || teacher.avatar],
        },
        twitter: {
            card: 'summary_large_image',
            title: teacher.name,
            description: teacher.tagline,
        }
    }
}

export default function TeacherProfilePage({ params }: Props) {
    // In a real app, we would fetch teacher data based on params.username
    // const teacher = await getTeacher(params.username)
    const teacher = DUMMY_TEACHER

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Container */}
            <div className="container mx-auto max-w-6xl px-4 py-6 md:py-10 space-y-8">

                {/* 1. Profile Header Section */}
                <ProfileHeader teacher={teacher} />

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Content Column (Videos, Portfolio, etc) */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 3. Video Showcase */}
                        <VideoShowcase videos={teacher.videos} />

                        {/* 6. Teaching Portfolio */}
                        <PortfolioSection achievements={teacher.achievements} />

                        {/* 4. SEO Topic Pages (Mock) */}
                        <div className="p-6 rounded-xl border border-dashed border-white/10 bg-slate-900/20">
                            <h3 className="font-semibold mb-3">Popular Topics by {teacher.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                <a href="#" className="text-sm text-cyan-500 hover:underline">Rotational Motion Best Explanation</a>
                                <span className="text-muted-foreground">•</span>
                                <a href="#" className="text-sm text-cyan-500 hover:underline">Calculus for Beginners</a>
                                <span className="text-muted-foreground">•</span>
                                <a href="#" className="text-sm text-cyan-500 hover:underline">JEE Mains Strategy 2025</a>
                            </div>
                        </div>

                    </div>

                    {/* Right Sidebar Column (Links, Schedule, Resources) */}
                    <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 h-fit">

                        {/* 2. Smart Link-in-Bio (Sticky on Desktop) */}
                        <div className="bg-card/30 rounded-xl p-1">
                            <LinkInBio quickLinks={teacher.quickLinks} />
                        </div>

                        {/* 7. Class Schedule */}
                        <ScheduleSection schedule={teacher.schedule} />

                        {/* 5. PDF Repository */}
                        <ResourcesSection resources={teacher.resources} />

                    </div>
                </div>

                {/* Footer info */}
                <footer className="pt-10 pb-6 text-center text-sm text-muted-foreground border-t border-white/5">
                    <p>© {new Date().getFullYear()} {teacher.name}. All rights reserved.</p>
                    <p className="mt-1">Powered by YourApp</p>
                </footer>
            </div>
        </div>
    )
}
