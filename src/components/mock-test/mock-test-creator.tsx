"use client"

import { useState } from "react"
import {
    Plus,
    Trash2,
    FileText,
    Sparkles,
    Target,
    ListChecks
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { FuturisticCard } from "@/components/ui/futuristic-card"

const topics = [
    "General Science", "Physics", "Chemistry", "Biology",
    "Mathematics", "Reasoning", "English", "History",
    "Geography", "Polity", "Economy", "Current Affairs"
]

const levels = ["Easy", "Medium", "Hard", "Mixed"]

const examTags = ["SSC CGL", "SSC CHSL", "SSC MTS", "Bank PO", "Bank Clerk", "UPSC", "State PSC", "Railway"]

interface TopicRow {
    id: string
    topic: string
    questions: number
    level: string
    examTag: string
}

export function MockTestCreator({
    type
}: {
    type: 'mock' | 'quiz' | 'test-series'
}) {
    const [prompt, setPrompt] = useState("")
    const [totalQuestions, setTotalQuestions] = useState(100)
    const [duration, setDuration] = useState(120)
    const [isLive, setIsLive] = useState(false)
    const [topicRows, setTopicRows] = useState<TopicRow[]>([
        { id: '1', topic: '', questions: 10, level: 'Medium', examTag: '' }
    ])

    const addTopicRow = () => {
        setTopicRows([
            ...topicRows,
            { id: Date.now().toString(), topic: '', questions: 10, level: 'Medium', examTag: '' }
        ])
    }

    const removeTopicRow = (id: string) => {
        if (topicRows.length > 1) {
            setTopicRows(topicRows.filter(row => row.id !== id))
        }
    }

    const updateTopicRow = (id: string, field: keyof TopicRow, value: string | number) => {
        setTopicRows(topicRows.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        ))
    }

    const typeLabels = {
        'mock': 'Mock Test',
        'quiz': 'Quiz',
        'test-series': 'Test Series'
    }

    return (
        <div className="space-y-6 max-w-4xl">
            {/* Header */}
            <div>
                <h1 className="text-xl font-semibold">
                    <span className="gradient-text">Create {typeLabels[type]}</span>
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                    Configure your {typeLabels[type].toLowerCase()} with AI-powered question generation
                </p>
            </div>

            {/* Basic Info */}
            <FuturisticCard>
                <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Basic Information</span>
                </div>
                <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                placeholder="e.g., SSC CGL Mock Test 1"
                                className="mt-1 bg-muted/50 dark:bg-slate-700/30 border-border/50 dark:border-cyan-500/10"
                            />
                        </div>
                        <div>
                            <Label htmlFor="totalQuestions">Total Questions</Label>
                            <Input
                                id="totalQuestions"
                                type="number"
                                value={totalQuestions}
                                onChange={(e) => setTotalQuestions(Number(e.target.value))}
                                className="mt-1 bg-muted/50 dark:bg-slate-700/30 border-border/50 dark:border-cyan-500/10"
                            />
                        </div>
                    </div>

                    {(type === 'test-series' || type === 'mock') && (
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div>
                                <Label htmlFor="duration">Duration (mins)</Label>
                                <Input
                                    id="duration"
                                    type="number"
                                    value={duration}
                                    onChange={(e) => setDuration(Number(e.target.value))}
                                    className="mt-1 bg-muted/50 dark:bg-slate-700/30 border-border/50 dark:border-cyan-500/10"
                                />
                            </div>
                            <div className="flex items-center gap-3 pt-6">
                                <Switch
                                    id="isLive"
                                    checked={isLive}
                                    onCheckedChange={setIsLive}
                                />
                                <Label htmlFor="isLive" className="text-sm">Live Test</Label>
                            </div>
                        </div>
                    )}
                </div>
            </FuturisticCard>

            {/* AI Prompt */}
            <FuturisticCard glowColor="from-violet-500 to-purple-500">
                <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">AI Generation Prompt</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                    Describe the question pattern, difficulty mix, and any specific requirements
                </p>
                <Textarea
                    placeholder="e.g., Generate questions following SSC CGL Tier-1 pattern. Focus on quantitative aptitude with algebra and geometry..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={4}
                    className="resize-none bg-muted/50 dark:bg-slate-700/30 border-border/50 dark:border-cyan-500/10"
                />
            </FuturisticCard>

            {/* Topic Pattern */}
            <FuturisticCard glowColor="from-emerald-500 to-teal-500">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Topic Pattern</span>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={addTopicRow}
                        className="gap-1.5 border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-500/10"
                    >
                        <Plus className="h-4 w-4" />
                        Add Topic
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                    Define question distribution across topics
                </p>

                <div className="space-y-3">
                    {/* Header Row */}
                    <div className="hidden sm:grid grid-cols-12 gap-3 text-xs font-medium text-muted-foreground px-1">
                        <div className="col-span-4">Topic</div>
                        <div className="col-span-2">Questions</div>
                        <div className="col-span-2">Level</div>
                        <div className="col-span-3">Exam Tag</div>
                        <div className="col-span-1"></div>
                    </div>

                    {/* Topic Rows */}
                    {topicRows.map((row) => (
                        <div
                            key={row.id}
                            className="grid grid-cols-1 sm:grid-cols-12 gap-3 p-3 rounded-lg bg-muted/50 dark:bg-slate-700/30 border border-border/50 dark:border-cyan-500/10"
                        >
                            <div className="sm:col-span-4">
                                <Label className="sm:hidden text-xs text-muted-foreground mb-1 block">Topic</Label>
                                <Select
                                    value={row.topic}
                                    onValueChange={(v) => updateTopicRow(row.id, 'topic', v)}
                                >
                                    <SelectTrigger className="h-9 bg-transparent border-border/50 dark:border-cyan-500/10">
                                        <SelectValue placeholder="Select topic" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {topics.map((t) => (
                                            <SelectItem key={t} value={t}>{t}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="sm:col-span-2">
                                <Label className="sm:hidden text-xs text-muted-foreground mb-1 block">Questions</Label>
                                <Input
                                    type="number"
                                    value={row.questions}
                                    onChange={(e) => updateTopicRow(row.id, 'questions', Number(e.target.value))}
                                    className="h-9 bg-transparent border-border/50 dark:border-cyan-500/10"
                                    min={1}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <Label className="sm:hidden text-xs text-muted-foreground mb-1 block">Level</Label>
                                <Select
                                    value={row.level}
                                    onValueChange={(v) => updateTopicRow(row.id, 'level', v)}
                                >
                                    <SelectTrigger className="h-9 bg-transparent border-border/50 dark:border-cyan-500/10">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {levels.map((l) => (
                                            <SelectItem key={l} value={l}>{l}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="sm:col-span-3">
                                <Label className="sm:hidden text-xs text-muted-foreground mb-1 block">Exam Tag</Label>
                                <Select
                                    value={row.examTag}
                                    onValueChange={(v) => updateTopicRow(row.id, 'examTag', v)}
                                >
                                    <SelectTrigger className="h-9 bg-transparent border-border/50 dark:border-cyan-500/10">
                                        <SelectValue placeholder="Select exam" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {examTags.map((e) => (
                                            <SelectItem key={e} value={e}>{e}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="sm:col-span-1 flex items-end">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-9 w-9 text-muted-foreground hover:text-destructive"
                                    onClick={() => removeTopicRow(row.id)}
                                    disabled={topicRows.length === 1}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}

                    {/* Summary */}
                    <div className="flex items-center gap-4 pt-2 text-sm">
                        <Badge variant="secondary" className="gap-1 bg-cyan-500/10 text-cyan-500 border-cyan-500/30">
                            <ListChecks className="h-3 w-3" />
                            {topicRows.reduce((sum, row) => sum + row.questions, 0)} questions
                        </Badge>
                        <Badge variant="secondary" className="gap-1 bg-violet-500/10 text-violet-500 border-violet-500/30">
                            <Target className="h-3 w-3" />
                            {topicRows.filter(r => r.topic).length} topics
                        </Badge>
                    </div>
                </div>
            </FuturisticCard>

            {/* Actions */}
            <div className="flex items-center gap-3">
                <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25">
                    <Sparkles className="h-4 w-4" />
                    Generate with AI
                </Button>
                <Button variant="outline" className="border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-500/10">
                    Save as Draft
                </Button>
            </div>
        </div>
    )
}
