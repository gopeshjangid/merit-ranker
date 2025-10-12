import Link from "next/link"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Building, Users } from "lucide-react"
import { PartnerImage } from "@/components/partner-image" // Import the new Client Component

export const metadata: Metadata = {
  title: "Our Partners - eSIM Myanmar",
  description:
    "eSIM Myanmar collaborates with leading telecom operators, financial institutions, payment providers, and marketing experts to offer seamless digital SIM services.",
  keywords: [
    "eSIM Myanmar partners",
    "telecom partners Myanmar",
    "payment partners Myanmar",
    "financial partners Myanmar",
    "ATOM",
    "Mytel",
    "AYA Bank",
    "UAB Bank",
    "WAVEPay",
    "UABPay",
    "AYAPay",
    "MPU",
    "VISA",
    "MasterCard",
    "UPI",
    "ACTIV DIGITAL MARKETING",
  ],
}

interface Partner {
  id: string
  name: string
  logoUrl: string
  description: string
  websiteUrl?: string
  category: "Telecommunication" | "Financial Institution" | "Payment Gateway" | "Digital Marketing"
}

// ** PLACEHOLDER DATA - REPLACE WITH ACTUAL LOGO URLS AND WEBSITE URLS **
const partnersData: Partner[] = [
  {
    id: "activ_digital",
    name: "ACTIV DIGITAL MARKETING",
    logoUrl: "/placeholder.svg?width=180&height=90&text=ACTIV+Digital",
    description:
      "Strategic digital marketing partner helping eSIM Myanmar reach its audience effectively and grow its online presence.",
    websiteUrl: "https://esim.com.mm",
    category: "Digital Marketing",
  },
  {
    id: "atom",
    name: "ATOM",
    logoUrl: "/placeholder.svg?width=180&height=90&text=ATOM",
    description:
      "A leading telecommunications provider in Myanmar, ensuring reliable network connectivity and innovative digital services for our eSIM users.",
    websiteUrl: "#",
    category: "Telecommunication",
  },
  {
    id: "mytel",
    name: "Mytel",
    logoUrl: "/placeholder.svg?width=180&height=90&text=Mytel",
    description:
      "Providing extensive 4G coverage and competitive data services, Mytel is a key telecom partner for nationwide access.",
    websiteUrl: "#",
    category: "Telecommunication",
  },
  {
    id: "aya_bank",
    name: "AYA Bank",
    logoUrl: "/placeholder.svg?width=180&height=90&text=AYA+Bank",
    description:
      "One of Myanmar's largest commercial banks, AYA Bank is a trusted financial institution facilitating secure payment transactions.",
    websiteUrl: "#",
    category: "Financial Institution",
  },
  {
    id: "uab_bank",
    name: "UAB Bank",
    logoUrl: "/placeholder.svg?width=180&height=90&text=UAB+Bank",
    description:
      "Partnering with UAB Bank, a leading bank in Myanmar focused on innovation and customer-centric financial solutions.",
    websiteUrl: "#",
    category: "Financial Institution",
  },
  {
    id: "wavepay",
    name: "WAVEPay",
    logoUrl: "/placeholder.svg?width=180&height=90&text=WAVEPay",
    description:
      "Enabling convenient and widespread mobile payments through the popular WAVEPay platform for easy top-ups and purchases.",
    websiteUrl: "#",
    category: "Payment Gateway",
  },
  {
    id: "uabpay",
    name: "UABPay",
    logoUrl: "/placeholder.svg?width=180&height=90&text=UABPay",
    description: "Offering seamless digital payment experiences through UAB Bank's mobile payment application, UABPay.",
    websiteUrl: "#",
    category: "Payment Gateway",
  },
  {
    id: "ayapay",
    name: "AYAPay",
    logoUrl: "/placeholder.svg?width=180&height=90&text=AYAPay",
    description:
      "Facilitating easy and secure mobile wallet transactions with AYAPay, a digital payment platform by AYA Bank.",
    websiteUrl: "#",
    category: "Payment Gateway",
  },
  {
    id: "mpu",
    name: "MPU (Myanmar Payment Union)",
    logoUrl: "/placeholder.svg?width=180&height=90&text=MPU",
    description:
      "Connecting with Myanmar's national payment network, MPU, for broad interbank transaction and card payment acceptance.",
    websiteUrl: "#",
    category: "Payment Gateway",
  },
  {
    id: "visa",
    name: "VISA",
    logoUrl: "/placeholder.svg?width=180&height=90&text=VISA",
    description:
      "Accepting globally recognized VISA cards for fast, secure, and reliable electronic payments, both locally and internationally.",
    websiteUrl: "#",
    category: "Payment Gateway",
  },
  {
    id: "mastercard",
    name: "MasterCard",
    logoUrl: "/placeholder.svg?width=180&height=90&text=MasterCard",
    description:
      "Providing customers with the flexibility to pay using MasterCard, a leading global payment network offering a wide range of services.",
    websiteUrl: "#",
    category: "Payment Gateway",
  },
  {
    id: "upi",
    name: "UPI (UnionPay International)",
    logoUrl: "/placeholder.svg?width=180&height=90&text=UPI",
    description:
      "Offering UnionPay as a secure and convenient payment option for a diverse range of customers worldwide.",
    websiteUrl: "#",
    category: "Payment Gateway",
  },
]

const categories = ["Telecommunication", "Financial Institution", "Payment Gateway", "Digital Marketing"] as const

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Navigation menu as specified */}
      <main className="flex-grow pt-20 pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-16">
            <Users className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text mb-4">Our Valued Partners</h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              We collaborate with a diverse network of industry leaders to bring you the best eSIM experience in
              Myanmar. Our partners play a crucial role in ensuring seamless connectivity, secure transactions, and
              innovative services.
            </p>
          </header>

          {categories.map((category) => {
            const categoryPartners = partnersData.filter((p) => p.category === category)
            if (categoryPartners.length === 0) return null

            return (
              <section key={category} className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 border-b pb-2 border-border/50">
                  {category} Partners
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {categoryPartners.map((partner) => (
                    <Card
                      key={partner.id}
                      className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card h-full"
                    >
                      <CardHeader className="p-6 items-center border-b">
                        <div className="w-full h-24 relative mb-4 flex items-center justify-center bg-muted/20 rounded-md p-2">
                          {/* Using the PartnerImage Client Component here */}
                          <PartnerImage src={partner.logoUrl} alt={`${partner.name} Logo`} name={partner.name} />
                        </div>
                        <CardTitle className="text-lg font-semibold text-center">{partner.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <p className="text-foreground/70 text-sm mb-4 flex-grow">{partner.description}</p>
                        {partner.websiteUrl && partner.websiteUrl !== "#" && (
                          <Button asChild variant="outline" className="mt-auto w-full">
                            <a
                              href={partner.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )
          })}

          <section className="mt-16 py-12 bg-card rounded-lg shadow-md">
            <div className="container mx-auto px-4 text-center">
              <Building className="mx-auto h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Interested in Partnering?</h2>
              <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
                We are always looking for new opportunities to collaborate and innovate. If your organization is
                interested in becoming a partner, we'd love to hear from you.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us to Discuss Partnership</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
