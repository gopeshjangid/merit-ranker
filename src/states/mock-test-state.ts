import { create } from 'zustand'

export type Difficulty = "easy" | "medium" | "hard"

export type Option = { id: string; text: string }
export type Question = {
  id: string
  prompt: string
  options: Option[]
  correctId?: string
  difficulty?: Difficulty
  subject?: string
}

interface CreateMockState {
  // Tab state
  activeTab: "live" | "quiz"
  setActiveTab: (tab: "live" | "quiz") => void

  // Live Mock/Test state
  lmSubject: string
  lmDifficulty: Difficulty
  lmTimerMin: number
  lmCount: number
  lmGenerateBatch: number
  setLmSubject: (subject: string) => void
  setLmDifficulty: (difficulty: Difficulty) => void
  setLmTimerMin: (minutes: number) => void
  setLmCount: (count: number) => void
  setLmGenerateBatch: (batch: number) => void

  // Questions state
  questions: Question[]
  setQuestions: (questions: Question[]) => void
  addEmptyQuestion: () => void
  updateQuestion: (qid: string, patch: Partial<Question>) => void
  updateOption: (qid: string, oid: string, text: string) => void
  removeQuestion: (qid: string) => void

  // AI Help state
  aiContext: string
  aiSubject: string
  aiLevel: Difficulty
  aiNotesPdf: File | null
  setAiContext: (context: string) => void
  setAiSubject: (subject: string) => void
  setAiLevel: (level: Difficulty) => void
  setAiNotesPdf: (file: File | null) => void

  // Quiz state
  qSubject: string
  qLevel: Difficulty
  qPattern: string
  qNotes: string
  qTopics: string
  qNotesPdf: File | null
  setQSubject: (subject: string) => void
  setQLevel: (level: Difficulty) => void
  setQPattern: (pattern: string) => void
  setQNotes: (notes: string) => void
  setQTopics: (topics: string) => void
  setQNotesPdf: (file: File | null) => void

  // Selection state
  includedIds: string[]
  selectedQuestionId: string | null
  toggleIncluded: (qid: string) => void
  setSelectedQuestionId: (qid: string | null) => void

  // Actions
  aiSuggestQuestions: () => void
  improveQuestion: (qid: string) => void
  generateDifferentQuestion: (qid: string) => void
  increaseDifficultyQuestion: (qid: string) => void
  startLiveMock: () => void
  createQuiz: () => void
}

export const useCreateMockStore = create<CreateMockState>((set, get) => ({
  // Initial tab state
  activeTab: "live",
  setActiveTab: (tab) => set({ activeTab: tab }),

  // Initial Live Mock state
  lmSubject: "General Studies",
  lmDifficulty: "medium",
  lmTimerMin: 30,
  lmCount: 10,
  lmGenerateBatch: 3,
  setLmSubject: (subject) => set({ lmSubject: subject }),
  setLmDifficulty: (difficulty) => set({ lmDifficulty: difficulty }),
  setLmTimerMin: (minutes) => set({ lmTimerMin: minutes }),
  setLmCount: (count) => set({ lmCount: count }),
  setLmGenerateBatch: (batch) => set({ lmGenerateBatch: batch }),

  // Initial questions state
  questions: [],
  setQuestions: (questions) => set({ questions }),
  addEmptyQuestion: () => {
    const { lmSubject, lmDifficulty } = get()
    const id = crypto.randomUUID()
    const opts: Option[] = ["A", "B", "C", "D"].map((k, i) => ({
      id: `${id}-${i + 1}`,
      text: "",
    }))
    set((state) => ({
      questions: [
        ...state.questions,
        {
          id,
          prompt: "",
          options: opts,
          difficulty: lmDifficulty,
          subject: lmSubject,
        },
      ],
    }))
  },
  updateQuestion: (qid, patch) => {
    set((state) => ({
      questions: state.questions.map((q) => (q.id === qid ? { ...q, ...patch } : q)),
    }))
  },
  updateOption: (qid, oid, text) => {
    set((state) => ({
      questions: state.questions.map((q) =>
        q.id === qid
          ? {
              ...q,
              options: q.options.map((o) => (o.id === oid ? { ...o, text } : o)),
            }
          : q
      ),
    }))
  },
  removeQuestion: (qid) => {
    set((state) => ({
      questions: state.questions.filter((q) => q.id !== qid),
    }))
  },

  // Initial AI Help state
  aiContext: "",
  aiSubject: "General Studies",
  aiLevel: "medium",
  aiNotesPdf: null,
  setAiContext: (context) => set({ aiContext: context }),
  setAiSubject: (subject) => set({ aiSubject: subject }),
  setAiLevel: (level) => set({ aiLevel: level }),
  setAiNotesPdf: (file) => set({ aiNotesPdf: file }),

  // Initial Quiz state
  qSubject: "General Studies",
  qLevel: "medium",
  qPattern: "MCQ",
  qNotes: "",
  qTopics: "",
  qNotesPdf: null,
  setQSubject: (subject) => set({ qSubject: subject }),
  setQLevel: (level) => set({ qLevel: level }),
  setQPattern: (pattern) => set({ qPattern: pattern }),
  setQNotes: (notes) => set({ qNotes: notes }),
  setQTopics: (topics) => set({ qTopics: topics }),
  setQNotesPdf: (file) => set({ qNotesPdf: file }),

  // Initial selection state
  includedIds: [],
  selectedQuestionId: null,
  toggleIncluded: (qid) => {
    set((state) => ({
      includedIds: state.includedIds.includes(qid)
        ? state.includedIds.filter((id) => id !== qid)
        : [...state.includedIds, qid],
    }))
  },
  setSelectedQuestionId: (qid) => set({ selectedQuestionId: qid }),

  // Actions
  aiSuggestQuestions: () => {
    const { lmGenerateBatch, aiContext, aiSubject, aiLevel } = get()
    const batch = Math.max(1, Math.min(5, lmGenerateBatch))
    const generated: Question[] = Array.from({ length: batch }).map((_, idx) => {
      const id = crypto.randomUUID()
      return {
        id,
        prompt:
          aiContext?.trim().length > 0
            ? `(${idx + 1}) Based on: ${aiContext.slice(0, 80)}...`
            : `(${idx + 1}) Sample ${aiSubject} question for ${aiLevel} level.`,
        options: ["A", "B", "C", "D"].map((_, i) => ({
          id: `${id}-${i + 1}`,
          text: `Option ${i + 1}`,
        })),
        correctId: `${id}-1`,
        difficulty: aiLevel,
        subject: aiSubject,
      }
    })
    set((state) => ({ questions: [...state.questions, ...generated] }))
  },

  improveQuestion: (qid) => {
    const { questions } = get()
    const question = questions.find((q) => q.id === qid)
    if (question) {
      get().updateQuestion(qid, {
        prompt: `${question.prompt || ""} (refined for clarity)`.trim(),
      })
    }
  },

  generateDifferentQuestion: (qid) => {
    const { questions } = get()
    const q = questions.find((x) => x.id === qid)
    if (!q) return
    const id = crypto.randomUUID()
    const shuffled = [...q.options].sort(() => Math.random() - 0.5)
    get().updateQuestion(qid, {
      id,
      prompt: `Variation: ${q.prompt || "New question"}`,
      options: shuffled.map((o, i) => ({ ...o, id: `${id}-${i + 1}` })),
      correctId: `${id}-1`,
    })
  },

  increaseDifficultyQuestion: (qid) => {
    const { questions } = get()
    const question = questions.find((q) => q.id === qid)
    if (question) {
      get().updateQuestion(qid, {
        difficulty: "hard",
        prompt: `${question.prompt || ""} (more challenging)`.trim(),
      })
    }
  },

  startLiveMock: () => {
    const { questions, lmSubject, lmTimerMin, includedIds } = get()
    if (questions.length === 0) {
      alert("Please add or generate at least 1 question to start.")
      return
    }
    const selectedCount = includedIds.length > 0 ? includedIds.length : questions.length
    alert(`Live Mock started for ${lmSubject} with ${selectedCount} questions and ${lmTimerMin} minutes.`)
  },

  createQuiz: () => {
    const { qSubject, qLevel, qPattern, qNotes, qTopics } = get()
    const summary = [
      `Subject: ${qSubject}`,
      `Level: ${qLevel}`,
      `Pattern: ${qPattern}`,
      qNotes ? `Notes: ${qNotes}` : "Notes: (none)",
      qTopics ? `Topics: ${qTopics}` : "Topics: (none)",
    ].join("\n")
    alert(`Quiz created (UI-only):\n\n${summary}`)
  },
}))