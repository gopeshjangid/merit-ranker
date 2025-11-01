"use client"

import { Clock, Wand2, Bot, TrendingUp } from "lucide-react"


export function WhyTeachersChooseSection() {
  
  const items = [
    { 
      icon: Clock, 
      title: "Save Time & Effort", 
      desc: "Automate note creation, slide building, and mock generation with AI tools for teaching." 
    },
    { 
      icon: Wand2, 
      title: "Improve Accuracy with AI", 
      desc: "Smart suggestions refine your content and correct errors in real time." 
    },
    { 
      icon: Bot, 
      title: "Your Daily Teaching Assistant", 
      desc: "No technical skills required — let your AI assistant handle daily communication and responses." 
    },
    { 
      icon: TrendingUp, 
      title: "Boost Your Brand", 
      desc: "Grow your personal brand, get discovered by students, and teach online to earn money through Meritranker." 
    },
  ]

  return (
    <section className="py-14 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-6">Why Teachers Choose Meritranker</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((w) => (
            <div
              key={w.title}
              className="bg-card border border-border rounded-xl p-4 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20"
            >
              <div className="flex items-start gap-3">
                <w.icon className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-medium text-foreground">{w.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
