"use client"

import { MockTestCreator } from "@/components/mock-test/mock-test-creator"

export default function CreateQuizPage() {
    return (
        <div className="space-y-6">
            <MockTestCreator type="quiz" />
        </div>
    )
}
