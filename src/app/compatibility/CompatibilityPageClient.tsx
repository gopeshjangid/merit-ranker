"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Search, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

// Mock device data - replace with actual data source
const allDevices = [
  // Apple
  { brand: "Apple", model: "iPhone 15 Pro Max", compatible: true },
  { brand: "Apple", model: "iPhone 15 Pro", compatible: true },
  { brand: "Apple", model: "iPhone 15 Plus", compatible: true },
  { brand: "Apple", model: "iPhone 15", compatible: true },
  { brand: "Apple", model: "iPhone 14 Pro Max", compatible: true },
  { brand: "Apple", model: "iPhone 14 Pro", compatible: true },
  { brand: "Apple", model: "iPhone 14 Plus", compatible: true },
  { brand: "Apple", model: "iPhone 14", compatible: true },
  { brand: "Apple", model: "iPhone 13 Pro Max", compatible: true },
  { brand: "Apple", model: "iPhone 13 Pro", compatible: true },
  { brand: "Apple", model: "iPhone 13", compatible: true },
  { brand: "Apple", model: "iPhone 13 Mini", compatible: true },
  { brand: "Apple", model: "iPhone 12 Pro Max", compatible: true },
  { brand: "Apple", model: "iPhone 12 Pro", compatible: true },
  { brand: "Apple", model: "iPhone 12", compatible: true },
  { brand: "Apple", model: "iPhone 12 Mini", compatible: true },
  { brand: "Apple", model: "iPhone SE (2nd gen and later)", compatible: true },
  { brand: "Apple", model: "iPhone 11 Pro Max", compatible: true },
  { brand: "Apple", model: "iPhone 11 Pro", compatible: true },
  { brand: "Apple", model: "iPhone 11", compatible: true },
  { brand: "Apple", model: "iPhone XS Max", compatible: true },
  { brand: "Apple", model: "iPhone XS", compatible: true },
  { brand: "Apple", model: "iPhone XR", compatible: true },
  { brand: "Apple", model: "iPad Pro (11-inch - all gens)", compatible: true },
  { brand: "Apple", model: "iPad Pro (12.9-inch - 3rd gen and later)", compatible: true },
  { brand: "Apple", model: "iPad Air (3rd gen and later)", compatible: true },
  { brand: "Apple", model: "iPad (7th gen and later)", compatible: true },
  { brand: "Apple", model: "iPad mini (5th gen and later)", compatible: true },
  { brand: "Apple", model: "iPhone X", compatible: false },
  { brand: "Apple", model: "iPhone 8", compatible: false },

  // Samsung
  { brand: "Samsung", model: "Galaxy S24 Ultra", compatible: true },
  { brand: "Samsung", model: "Galaxy S24+", compatible: true },
  { brand: "Samsung", model: "Galaxy S24", compatible: true },
  { brand: "Samsung", model: "Galaxy S23 Ultra", compatible: true },
  { brand: "Samsung", model: "Galaxy S23+", compatible: true },
  { brand: "Samsung", model: "Galaxy S23", compatible: true },
  { brand: "Samsung", model: "Galaxy S22 Ultra 5G", compatible: true },
  { brand: "Samsung", model: "Galaxy S22+ 5G", compatible: true },
  { brand: "Samsung", model: "Galaxy S22 5G", compatible: true },
  { brand: "Samsung", model: "Galaxy S21 Ultra 5G", compatible: true },
  { brand: "Samsung", model: "Galaxy S21+ 5G", compatible: true },
  { brand: "Samsung", model: "Galaxy S21 5G", compatible: true },
  { brand: "Samsung", model: "Galaxy S20 Ultra 5G", compatible: true },
  { brand: "Samsung", model: "Galaxy S20+", compatible: true },
  { brand: "Samsung", model: "Galaxy S20", compatible: true },
  { brand: "Samsung", model: "Galaxy Z Fold5", compatible: true },
  { brand: "Samsung", model: "Galaxy Z Flip5", compatible: true },
  { brand: "Samsung", model: "Galaxy Z Fold4", compatible: true },
  { brand: "Samsung", model: "Galaxy Z Flip4", compatible: true },
  { brand: "Samsung", model: "Galaxy Note20 Ultra", compatible: true },
  { brand: "Samsung", model: "Galaxy Note20", compatible: true },
  { brand: "Samsung", model: "Galaxy S10", compatible: false }, // Example of non-compatible

  // Google
  { brand: "Google", model: "Pixel 8 Pro", compatible: true },
  { brand: "Google", model: "Pixel 8", compatible: true },
  { brand: "Google", model: "Pixel Fold", compatible: true },
  { brand: "Google", model: "Pixel 7 Pro", compatible: true },
  { brand: "Google", model: "Pixel 7", compatible: true },
  { brand: "Google", model: "Pixel 6 Pro", compatible: true },
  { brand: "Google", model: "Pixel 6", compatible: true },
  { brand: "Google", model: "Pixel 5a", compatible: true },
  { brand: "Google", model: "Pixel 5", compatible: true },
  { brand: "Google", model: "Pixel 4a 5G", compatible: true },
  { brand: "Google", model: "Pixel 4a", compatible: true },
  { brand: "Google", model: "Pixel 4 XL", compatible: true },
  { brand: "Google", model: "Pixel 4", compatible: true },
  { brand: "Google", model: "Pixel 3a XL", compatible: true },
  { brand: "Google", model: "Pixel 3a", compatible: true },
  { brand: "Google", model: "Pixel 3 XL", compatible: true },
  { brand: "Google", model: "Pixel 3", compatible: true },
  { brand: "Google", model: "Pixel 2", compatible: false },
]

// Group devices by brand
const devicesByBrand = allDevices.reduce(
  (acc, device) => {
    if (!acc[device.brand]) {
      acc[device.brand] = []
    }
    acc[device.brand].push(device)
    return acc
  },
  {} as Record<string, typeof allDevices>,
)

export default function CompatibilityPageClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [compatibilityResult, setCompatibilityResult] = useState<string | null>(null)

  const filteredDevices = useMemo(() => {
    if (!searchTerm.trim()) {
      return devicesByBrand
    }
    const lowerSearchTerm = searchTerm.toLowerCase()
    const filtered = {} as Record<string, typeof allDevices>
    for (const brand in devicesByBrand) {
      const brandDevices = devicesByBrand[brand].filter(
        (device) =>
          device.model.toLowerCase().includes(lowerSearchTerm) || brand.toLowerCase().includes(lowerSearchTerm),
      )
      if (brandDevices.length > 0) {
        filtered[brand] = brandDevices
      }
    }
    return filtered
  }, [searchTerm])

  const handleCheckDevice = () => {
    // This is a placeholder. Real device check might involve:
    // 1. User Agent sniffing (unreliable for eSIM capability)
    // 2. Guiding user to check settings (most reliable)
    // 3. Querying a more comprehensive database if available
    setCompatibilityResult(
      "Please check your device settings: Go to Settings > Cellular/Mobile Data. If you see an option like 'Add Cellular Plan' or 'Add eSIM', your device likely supports eSIM. You can also search for your device model below.",
    )
  }

  return (
    <>
      {/* Static metadata for client components should be in layout or parent server component */}
      {/* For this example, we'll assume it's handled by app/layout.tsx or a similar mechanism */}
      <Navbar />
      <main className="pt-20 md:pt-24 bg-slate-900 text-slate-200">
        <div className="container mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Device Compatibility</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Check if your device supports eSIM technology. Most modern smartphones and tablets are compatible.
            </p>
          </div>

          <Card className="mb-12 bg-slate-800 border-slate-700 shadow-xl">
            <CardHeader className="items-center text-center">
              <Smartphone className="h-12 w-12 text-cyan-400 mb-2" />
              <CardTitle className="text-2xl text-white">Is your device compatible with eSIM?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-6">
                Click the button below for general guidance, or search for your specific device model in the list.
              </p>
              <Button onClick={handleCheckDevice} size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <CheckCircle className="mr-2 h-5 w-5" /> Check My Device Guide
              </Button>
              {compatibilityResult && (
                <div className="mt-6 p-4 bg-slate-700 rounded-md text-sm text-slate-200 text-left">
                  <AlertTriangle className="inline-block mr-2 h-5 w-5 text-yellow-400" />
                  {compatibilityResult}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search for your device (e.g., iPhone 14, Galaxy S23)..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border-slate-700 text-slate-200 placeholder-slate-500 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {Object.keys(filteredDevices).length > 0 ? (
            Object.entries(filteredDevices).map(([brand, devices]) => (
              <div key={brand} className="mb-10">
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4 border-b-2 border-slate-700 pb-2">{brand}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {devices.map((device) => (
                    <div
                      key={device.model}
                      className={`p-4 rounded-lg flex items-center justify-between ${
                        device.compatible
                          ? "bg-green-900/30 border border-green-700"
                          : "bg-red-900/30 border border-red-700"
                      }`}
                    >
                      <span className="text-slate-100">{device.model}</span>
                      {device.compatible ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-400 py-8">No devices found matching your search criteria.</p>
          )}
          <div className="mt-12 p-6 bg-slate-800 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-3">General Compatibility Notes:</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
              <li>
                Device compatibility can vary by region and carrier-specific models. Always double-check with your
                device manufacturer or carrier if unsure.
              </li>
              <li>Your device must be network unlocked to use eSIMs from different carriers.</li>
              <li>
                Software updates can sometimes enable eSIM functionality on older compatible devices. Ensure your device
                OS is up to date.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
