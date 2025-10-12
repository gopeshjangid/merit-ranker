import { ContactForm } from "@/components/contact-form" // Assuming ContactForm is now a named export
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"
import { Mail, Phone, GlobeIcon, MessageSquare } from "lucide-react" // Renamed Globe to avoid conflict

export const metadata: Metadata = {
  title: "Contact Us - eSIM Myanmar",
  description:
    "Get in touch with eSIM Myanmar for support, inquiries, or partnership opportunities. Call us at 09650000172 or email info@esim.com.mm.",
  openGraph: {
    title: "Contact Us - eSIM Myanmar",
    description: "Reach out to eSIM Myanmar for all your eSIM needs and questions.",
    url: "https://esim.com.mm/contact",
    siteName: "eSIM Myanmar",
    type: "website",
  },
  alternates: {
    canonical: "https://esim.com.mm/contact",
  },
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us - eSIM Myanmar",
  description:
    "Contact eSIM Myanmar for any inquiries or support regarding our eSIM services. Reach out to us via our contact form, email, or phone.",
  url: "https://esim.com.mm/contact",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://esim.com.mm/contact",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://esim.com.mm/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://esim.com.mm/contact",
      },
    ],
  },
}

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "09 6500 00172",
      href: "tel:+959650000172",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@esim.com.mm",
      href: "mailto:info@esim.com.mm",
    },
    {
      icon: GlobeIcon,
      label: "Website",
      value: "esim.com.mm",
      href: "https://esim.com.mm",
    },
    {
      icon: MessageSquare, // Using MessageSquare for generic social media
      label: "Social",
      value: "@eSIMMyanmar",
      href: "https://x.com/eSIMMyanmar", // Replace with actual social media link if available
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 pb-12 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 md:mb-16">
              <Mail className="mx-auto h-16 w-16 text-primary mb-4" />
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text mb-4">Get in Touch</h1>
              <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
                We're here to help! Whether you have a question about our eSIMs, need support, or want to discuss
                partnership opportunities, feel free to reach out.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h2>
                <ul className="space-y-4">
                  {contactDetails.map((detail) => (
                    <li key={detail.label} className="flex items-start">
                      <detail.icon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="block font-medium text-foreground">{detail.label}</span>
                        <a
                          href={detail.href}
                          target={detail.label === "Website" || detail.label === "Social" ? "_blank" : undefined}
                          rel={
                            detail.label === "Website" || detail.label === "Social" ? "noopener noreferrer" : undefined
                          }
                          className="text-foreground/80 hover:text-primary transition-colors"
                        >
                          {detail.value}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
