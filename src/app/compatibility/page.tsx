import type { Metadata } from "next"
import CompatibilityPageClient from "./CompatibilityPageClient"

export const metadata: Metadata = {
  title: "eSIM Device Compatibility Check - eSIM Myanmar",
  description:
    "Check if your smartphone or tablet is compatible with eSIM technology for use in Myanmar. Search our list of supported devices.",
}

export default function CompatibilityPage() {
  return <CompatibilityPageClient />
}
