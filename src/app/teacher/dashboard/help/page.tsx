"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BookOpen, MessageSquare, Video, FileText, Mail, Phone, Search } from "lucide-react"

const faqs = [
  {
    question: "How do I create a new course?",
    answer: "Navigate to the 'Notes' section from the sidebar, click on 'Create New' button, and fill in the course details including title, description, and content."
  },
  {
    question: "How can I schedule a live class?",
    answer: "Go to the 'Schedule' page, click 'Schedule New Class', select the date, time, batch, and add class details. Students will be notified automatically."
  },
  {
    question: "How do I grade student submissions?",
    answer: "Visit the 'Students' section, select the assignment or quiz you want to grade, and use the grading interface to provide marks and feedback."
  },
  {
    question: "Can I export student data?",
    answer: "Yes, go to the 'Students' page and click on the 'Export' button to download student data in CSV or Excel format."
  },
  {
    question: "How do I update my profile?",
    answer: "Click on your profile picture in the sidebar or top right corner, select 'Profile', and edit your information. Don't forget to save changes."
  },
]

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of using the teacher dashboard",
    icon: BookOpen,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step video guides",
    icon: Video,
    color: "bg-violet-500/10 text-violet-600"
  },
  {
    title: "Documentation",
    description: "Detailed documentation and API references",
    icon: FileText,
    color: "bg-indigo-500/10 text-indigo-600"
  },
  {
    title: "Community Forum",
    description: "Connect with other teachers and get help",
    icon: MessageSquare,
    color: "bg-green-500/10 text-green-600"
  },
]

export default function HelpPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Help & Support</h2>
        <p className="text-muted-foreground">Find answers to common questions or contact us for assistance</p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search for help articles, guides, or FAQs..." 
              className="pl-10 h-12"
            />
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {resources.map((resource, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className={`flex size-12 items-center justify-center rounded-lg ${resource.color} mb-4`}>
                <resource.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Send us a message and we'll get back to you within 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What do you need help with?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Describe your issue or question..." 
                className="min-h-32"
              />
            </div>
            <Button className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Ways to Reach Us</CardTitle>
            <CardDescription>Choose the method that works best for you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Email Support</h4>
                <p className="text-sm text-muted-foreground mt-1">support@meritranker.com</p>
                <p className="text-xs text-muted-foreground mt-1">Response within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="flex size-10 items-center justify-center rounded-lg bg-violet-500/10">
                <Phone className="h-5 w-5 text-violet-600" />
              </div>
              <div>
                <h4 className="font-semibold">Phone Support</h4>
                <p className="text-sm text-muted-foreground mt-1">+1 (555) 123-4567</p>
                <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9 AM - 6 PM IST</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold">Live Chat</h4>
                <p className="text-sm text-muted-foreground mt-1">Chat with our team</p>
                <Button variant="link" className="h-auto p-0 mt-1 text-xs">
                  Start Chat →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
