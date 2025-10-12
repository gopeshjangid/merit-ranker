import Link from "next/link"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ShoppingCart, Construction } from "lucide-react"

export const metadata: Metadata = {
  title: "Buy eSIM - eSIM Myanmar",
  description: "Purchase your eSIM for Myanmar. Choose from various plans and providers.",
}

export default function BuyEsimPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <header className="py-12 md:py-16">
            <ShoppingCart className="mx-auto h-16 w-16 text-primary mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text mb-4">Buy Your eSIM</h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
              Select the perfect eSIM plan for your needs in Myanmar.
            </p>
          </header>

          <section className="py-12">
            <Construction className="mx-auto h-24 w-24 text-slate-500 mb-6" />
            <h2 className="text-2xl font-semibold text-slate-300 mb-4">Coming Soon!</h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Our eSIM purchasing platform is currently under construction. We're working hard to bring you a seamless
              experience. Please check back soon!
            </p>
            <p className="text-slate-400 max-w-lg mx-auto mt-4">
              In the meantime, you can explore our{" "}
              <Link href="/compatibility" className="text-primary hover:underline">
                compatibility list
              </Link>{" "}
              or learn{" "}
              <Link href="/how-it-works" className="text-primary hover:underline">
                how eSIMs work
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
