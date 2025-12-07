"use client"

import { MockTestCreator } from "@/components/mock-test/mock-test-creator"

export default function CreateTestSeriesPage() {
    return (
        <div className="space-y-6">
            <MockTestCreator type="test-series" />
        </div>
    )
}
