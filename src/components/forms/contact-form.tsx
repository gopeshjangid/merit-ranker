"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  // Changed to named export
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage("")

    // Simulate API call
    try {
      // Replace with your actual API endpoint for form submission
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      // const result = await response.json();
      // setSubmitMessage(result.message || "Message sent successfully!");

      // Simulate success after 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setSubmitMessage("Your message has been sent successfully! We'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" }) // Reset form
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again later or contact us directly via email.",
      )
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="How can we help?"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Your message..."
          className="mt-1"
        />
      </div>
      <div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
      {submitStatus && (
        <Alert variant={submitStatus === "success" ? "default" : "destructive"}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>{submitStatus === "success" ? "Success!" : "Error!"}</AlertTitle>
          <AlertDescription>{submitMessage}</AlertDescription>
        </Alert>
      )}
    </form>
  )
}
