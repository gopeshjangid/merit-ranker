import type { Metadata } from "next"
import FaqClientPage from "./FaqClientPage"

export const metadata: Metadata = {
  title: "FAQ - eSIM Myanmar",
  description: "Find answers to frequently asked questions about eSIM technology and our services in Myanmar.",
}

export default function FAQPage() {
  return (
    <>
      <FaqClientPage />
    </>
  )
}
