import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Zap, Smartphone, Settings, Globe, Shield, CheckCircle, Users, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - eSIM Myanmar",
  description: "Learn more about eSIM Myanmar, our mission, vision, and the benefits of using eSIM technology.",
}

const comparisonData = [
  {
    feature: "Space Saving",
    traditional: "Physical card takes up space",
    esim: "Built into your device's hardware",
    icon: Smartphone,
  },
  {
    feature: "Activation",
    traditional: "Visit store, wait for physical card",
    esim: "Instant activation via QR code",
    icon: Zap,
  },
  {
    feature: "Switching Carriers",
    traditional: "Need a new physical SIM",
    esim: "Switch plans digitally",
    icon: Settings,
  },
  {
    feature: "Travel",
    traditional: "Buy local SIMs or pay roaming",
    esim: "Easily add travel data plans",
    icon: Globe,
  },
  {
    feature: "Security",
    traditional: "Can be lost or stolen",
    esim: "More secure, cannot be physically removed easily",
    icon: Shield,
  },
  {
    feature: "Environmental Impact",
    traditional: "Plastic and packaging waste",
    esim: "Reduces plastic waste",
    icon: CheckCircle,
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-slate-900 text-slate-200">
        <div className="container mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About eSIM Myanmar</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Pioneering seamless connectivity in Myanmar with innovative eSIM technology.
            </p>
          </div>

          <section id="vision-mission" className="mb-16">
            <h2 className="text-3xl font-semibold text-white text-center mb-10">Our Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800 border-slate-700 text-slate-200">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Eye className="h-10 w-10 text-cyan-400" />
                  <CardTitle className="text-2xl text-cyan-400">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    To transform the mobile connectivity landscape in Myanmar by making eSIM technology the standard,
                    eliminating the need for physical SIM cards and simplifying the way people connect globally and
                    locally.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 text-slate-200">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Target className="h-10 w-10 text-cyan-400" />
                  <CardTitle className="text-2xl text-cyan-400">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    To educate and empower Myanmar citizens and visitors about eSIM technology, provide comprehensive
                    compatibility information, offer a wide range of plans from leading carriers, and facilitate the
                    seamless adoption of eSIMs across all major networks in the country.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="esim-vs-traditional" className="mb-16">
            <h2 className="text-3xl font-semibold text-white text-center mb-10">eSIM vs Traditional SIM</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-slate-800 border border-slate-700 rounded-lg shadow-lg">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-cyan-400">Feature</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-slate-300">
                      Traditional SIM
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-cyan-400">eSIM</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                      <td className="py-3 px-4 flex items-center">
                        <item.icon className="h-5 w-5 mr-2 text-cyan-400 opacity-80" />
                        {item.feature}
                      </td>
                      <td className="py-3 px-4">{item.traditional}</td>
                      <td className="py-3 px-4 text-cyan-300">{item.esim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="why-choose-us" className="mb-16">
            <h2 className="text-3xl font-semibold text-white text-center mb-10">Why Choose eSIM Myanmar?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Instant Activation",
                  description: "Get connected in minutes, no physical SIM needed.",
                  icon: Zap,
                },
                {
                  title: "Wide Carrier Selection",
                  description: "Access plans from MPT, ATOM, Ooredoo, Mytel and more.",
                  icon: Users,
                },
                {
                  title: "Travel Friendly",
                  description: "Easily switch plans when traveling internationally or domestically.",
                  icon: Globe,
                },
                {
                  title: "Secure & Convenient",
                  description: "No risk of losing or damaging a physical SIM card.",
                  icon: Shield,
                },
                {
                  title: "24/7 Support",
                  description: "Our dedicated team is here to help you anytime.",
                  icon: HelpCircle,
                },
                {
                  title: "Competitive Pricing",
                  description: "Get the best value for your mobile data needs in Myanmar.",
                  icon: CheckCircle,
                },
              ].map((item) => (
                <Card key={item.title} className="bg-slate-800 border-slate-700 text-slate-200">
                  <CardHeader className="items-center text-center">
                    <div className="p-3 bg-slate-700 rounded-full inline-block mb-2">
                      <item.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
