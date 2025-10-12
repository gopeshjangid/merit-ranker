import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, QrCode, CheckSquare, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "How eSIM Works - eSIM Myanmar",
  description: "Learn how to easily set up and use your eSIM in Myanmar with our simple step-by-step guide.",
}

const steps = [
  {
    icon: Smartphone,
    title: "Choose Carrier",
    description: "Select your preferred mobile carrier that supports eSIM technology in Myanmar.",
  },
  {
    icon: QrCode,
    title: "Get LPA Code",
    description: "Receive a QR code or activation code from your carrier to set up your eSIM.",
  },
  {
    icon: CheckSquare,
    title: "Scan with Phone",
    description: "Scan the QR code with your phone's camera or enter the activation code manually.",
  },
]

const activationSteps = {
  iphone: [
    "Go to Settings",
    "Tap on Cellular or Mobile Data",
    "Tap Add Cellular Plan or Add eSIM",
    "Scan the QR code provided by your carrier",
    "Follow the on-screen instructions to complete activation.",
  ],
  android: [
    "Go to Settings",
    "Tap on Network & internet or Connections",
    "Tap on SIM card manager or Mobile network",
    "Select Add eSIM or Add mobile plan",
    "Scan the QR code or enter details manually",
    "Follow the on-screen instructions.",
  ],
}

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-slate-900 text-slate-200">
        <div className="container mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">How eSIM Works</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Setting up an eSIM is quick and easy. Follow these simple steps to get started with your digital SIM card.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-slate-800 p-6 rounded-full mb-4 text-cyan-400">
                  <step.icon size={40} />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-white">{`${index + 1}. ${step.title}`}</h2>
                <p className="text-slate-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight
                    size={32}
                    className="text-cyan-500 mt-6 hidden md:block absolute left-full top-1/2 -translate-y-1/2 transform -translate-x-1/2"
                  />
                )}
              </div>
            ))}
          </div>
          {/* Visual separators for mobile if needed */}
          <div className="md:hidden space-y-8">
            {steps.map(
              (step, index) =>
                index < steps.length - 1 && (
                  <div key={`sep-${index}`} className="flex justify-center">
                    <ArrowRight size={24} className="text-cyan-500 rotate-90" />
                  </div>
                ),
            )}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Detailed Activation Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-700 border-slate-600 text-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">For iPhone Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2">
                    {activationSteps.iphone.map((step, i) => (
                      <li key={`iphone-step-${i}`}>{step}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
              <Card className="bg-slate-700 border-slate-600 text-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">For Android Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2">
                    {activationSteps.android.map((step, i) => (
                      <li key={`android-step-${i}`}>{step}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
