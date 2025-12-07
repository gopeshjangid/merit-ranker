"use client"

import { useState } from "react"
import { DUMMY_TEACHER } from "@/lib/dummy-teacher-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FuturisticCard } from "@/components/ui/futuristic-card"
import { Save, Layout, User, Share2 } from "lucide-react"

export default function BrandingPage() {
    const [formData, setFormData] = useState(DUMMY_TEACHER)

    const handleSave = () => {
        console.log("Saving branding data:", formData)
        alert("Branding settings saved! (This is a demo, changes won't persist)")
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold gradient-text">Personal Branding</h1>
                <Button onClick={handleSave} className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Basic details */}
                <FuturisticCard className="bg-card/50 dark:bg-slate-800/50">
                    <div className="flex items-center gap-2 mb-6">
                        <User className="h-5 w-5 text-cyan-500" />
                        <h2 className="text-lg font-semibold">Profile Information</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Display Name</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="tagline">Tagline</Label>
                            <Input
                                id="tagline"
                                value={formData.tagline}
                                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                value={formData.bio}
                                className="min-h-[100px]"
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="exp">Experience</Label>
                                <Input
                                    id="exp"
                                    value={formData.experience}
                                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="avatar">Avatar URL</Label>
                                <Input
                                    id="avatar"
                                    value={formData.avatar}
                                    onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                </FuturisticCard>

                {/* Socials & Links */}
                <div className="space-y-6">
                    <FuturisticCard className="bg-card/50 dark:bg-slate-800/50">
                        <div className="flex items-center gap-2 mb-6">
                            <Share2 className="h-5 w-5 text-purple-500" />
                            <h2 className="text-lg font-semibold">Social Connections</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Label>YouTube Channel</Label>
                                <Input
                                    value={formData.socials.youtube}
                                    onChange={(e) => setFormData({ ...formData, socials: { ...formData.socials, youtube: e.target.value } })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Instagram Profile</Label>
                                <Input
                                    value={formData.socials.instagram}
                                    onChange={(e) => setFormData({ ...formData, socials: { ...formData.socials, instagram: e.target.value } })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Telegram Channel</Label>
                                <Input
                                    value={formData.socials.telegram}
                                    onChange={(e) => setFormData({ ...formData, socials: { ...formData.socials, telegram: e.target.value } })}
                                />
                            </div>
                        </div>
                    </FuturisticCard>

                    <FuturisticCard className="bg-card/50 dark:bg-slate-800/50">
                        <div className="flex items-center gap-2 mb-4">
                            <Layout className="h-5 w-5 text-orange-500" />
                            <h2 className="text-lg font-semibold">Page Config</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            Manage how your public profile looks.
                        </p>
                        <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/50">
                            <span className="text-sm font-medium">Public Profile URL</span>
                            <a href={`/${formData.username}`} target="_blank" className="text-sm text-cyan-500 hover:underline">
                                yourdomain.com/{formData.username}
                            </a>
                        </div>
                    </FuturisticCard>
                </div>
            </div>
        </div>
    )
}
