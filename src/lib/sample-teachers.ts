// Simple sample dataset shared by marketplace and profile pages
export type Teacher = {
  slug: string
  name: string
  subjects: string[]
  bio: string
  achievements: string[]
  teachingStyle: string
  testimonials: string[]
  successStories: string
  totalStudents: number
  totalMockTests: number
  youtubeUrl?: string
  youtubeSubs?: number
  instagramUrl?: string
  instagramFollowers?: number
  telegramUrl?: string
  telegramMembers?: number
  avatar?: string
}

export const teachers: Teacher[] = [
  {
    slug: "ak-sharma",
    name: "Prof. A.K. Sharma",
    subjects: ["Quantitative Aptitude", "Reasoning"],
    bio: "15+ years training students for SSC and Banking exams. Known for shortcut methods and crystal-clear concept building.",
    achievements: ["500+ selections in SSC CGL", "Author of 'Quant Mastery'"],
    teachingStyle: "Concept-first, then speed-building via rigorous practice and live doubt-solving.",
    testimonials: ["Cleared SSC CGL Tier 1 with 182—thanks to Sharma Sir!", "Best for quant shortcuts and clarity"],
    successStories: "Trained 5000+ students; many rankers across SSC, Banking.",
    totalStudents: 5200,
    totalMockTests: 140,
    youtubeUrl: "https://youtube.com/@sharma-quant",
    youtubeSubs: 250000,
    instagramUrl: "https://instagram.com/sharma.quant",
    instagramFollowers: 82000,
    telegramUrl: "https://t.me/sharma_quant",
    telegramMembers: 18000,
    avatar: "/teacher-avatar.png",
  },
  {
    slug: "nanda-win",
    name: "Dr. Nanda Win",
    subjects: ["General Studies", "Myanmar History"],
    bio: "Passionate educator focused on fundamentals and exam strategy.",
    achievements: ["100+ students qualified in civil services prelims"],
    teachingStyle: "Story-driven explanations with weekly mock reviews.",
    testimonials: ["Engaging lectures and practical tips!"],
    successStories: "Helped hundreds build strong foundations for GS.",
    totalStudents: 2400,
    totalMockTests: 60,
    youtubeUrl: "https://youtube.com/@nanda-win",
    youtubeSubs: 54000,
    telegramUrl: "https://t.me/nandawin_gs",
    telegramMembers: 6200,
    avatar: "/teacher-avatar.png",
  },
]
