"use client"

import { useState, useMemo } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Tag } from "lucide-react"

const allFaqData = [
  {
    id: "what-is-esim",
    question: "What is an eSIM?",
    answer:
      "An eSIM (embedded SIM) is a digital SIM card that is built into your device. It allows you to activate a cellular plan from a carrier without needing a physical nano-SIM card. You can often store multiple eSIM profiles on one device and switch between them.",
    category: "eSIM Basics",
  },
  {
    id: "how-to-activate",
    question: "How do I activate my eSIM?",
    answer:
      "Activation is typically done by scanning a QR code provided by us or your chosen carrier after purchase. Some carriers might also support manual activation by entering details provided. We will send detailed instructions specific to your purchased eSIM plan to your email.",
    category: "Usage & Setup",
  },
  {
    id: "device-compatibility",
    question: "How do I know if my device supports eSIM?",
    answer:
      "Most newer smartphones from Apple (iPhone XS and later), Samsung (Galaxy S20 and later, Fold/Flip series), and Google (Pixel 3 and later) support eSIM. The best way to check is to go to your phone's settings under 'Cellular' or 'Mobile Data' and look for an option like 'Add Cellular Plan' or 'Add eSIM'. You can also visit our Compatibility page for a detailed list.",
    category: "Compatibility",
  },
  {
    id: "dual-sim",
    question: "Can I use both a physical SIM and an eSIM at the same time?",
    answer:
      "Yes, most eSIM-compatible phones are also Dual SIM devices. This means you can use one physical SIM card and one or more eSIMs simultaneously, allowing you to have two active phone numbers or data plans on a single device.",
    category: "eSIM Basics",
  },
  {
    id: "myanmar-carriers",
    question: "Which carriers in Myanmar support eSIM?",
    answer:
      "Major carriers in Myanmar like MPT, ATOM, Ooredoo, and Mytel are increasingly offering eSIM support. We partner with these providers to offer you a range of options. The availability might vary, so check our current provider list when purchasing.",
    category: "Carriers",
  },
  {
    id: "benefits-esim",
    question: "What are the benefits of using an eSIM?",
    answer:
      "Benefits include: easy switching between carriers/plans, no need to swap physical SIM cards (great for travel), ability to have multiple numbers on one device, and often quicker activation. It also reduces plastic waste from physical SIM cards.",
    category: "eSIM Basics",
  },
  {
    id: "esim-vs-physical",
    question: "Is eSIM better than a physical SIM?",
    answer:
      "eSIM offers more flexibility and convenience. You can't lose an eSIM as it's embedded. Switching plans is digital. However, physical SIMs are still widely used and understood. The 'better' option depends on your needs and device.",
    category: "eSIM Basics",
  },
  {
    id: "data-only-esim",
    question: "Can I get a data-only eSIM?",
    answer:
      "Yes, many eSIM plans, especially those for travelers, are data-only. This means they provide mobile data but may not include a local phone number or SMS/calling capabilities. Check the plan details before purchasing.",
    category: "Usage & Setup",
  },
  {
    id: "transfer-esim",
    question: "Can I transfer my eSIM to a new phone?",
    answer:
      "Transferring an eSIM depends on the carrier. Some allow easy digital transfer, while others might require you to get a new QR code. Contact your carrier or check their policy for specific instructions.",
    category: "Usage & Setup",
  },
  {
    id: "esim-security",
    question: "Is eSIM secure?",
    answer:
      "Yes, eSIM technology is designed with robust security features. Since it's embedded, it can't be physically stolen from your device like a traditional SIM card. Profile management is also secured.",
    category: "eSIM Basics",
  },
]

const categories = ["All Questions", ...new Set(allFaqData.map((item) => item.category))]

export default function FaqClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Questions")

  const filteredFaqData = useMemo(() => {
    return allFaqData.filter((item) => {
      const matchesCategory = selectedCategory === "All Questions" || item.category === selectedCategory
      const matchesSearch =
        searchTerm === "" ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [searchTerm, selectedCategory])

  return (
    <main className="pt-20 md:pt-24 bg-slate-900 text-slate-200">
      <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem-4rem)]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Find answers to common questions about eSIM technology and its usage in Myanmar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border-slate-700 text-slate-200 placeholder-slate-500 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-300 mb-3 flex items-center">
              <Filter className="h-5 w-5 mr-2 text-cyan-400" />
              Filter by Category
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${selectedCategory === category ? "bg-cyan-500 hover:bg-cyan-600 text-white" : "text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white"}`}
                >
                  <Tag className="h-4 w-4 mr-1.5 opacity-80" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredFaqData.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqData.map((item) => (
                <AccordionItem value={item.id} key={item.id} className="border-slate-700">
                  <AccordionTrigger className="text-lg text-left hover:no-underline text-slate-100 hover:text-cyan-400 py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-300 pb-4 prose prose-sm prose-invert max-w-none">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-center text-slate-400 py-8">No questions found matching your criteria.</p>
          )}
        </div>
      </div>
    </main>
  )
}
