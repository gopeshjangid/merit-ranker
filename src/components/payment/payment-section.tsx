"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedQRCode } from "./animated-qr-code"
import { AnimatedBlob } from "./animated-shapes"

const paymentMethods = [
  { name: "KBZPay", color: "bg-blue-500" },
  { name: "WavePay", color: "bg-teal-500" },
  { name: "AYA Pay", color: "bg-red-500" },
  { name: "UAB Pay", color: "bg-green-500" },
]

export function PaymentSection() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <AnimatedBlob className="w-96 h-96 top-20 left-20 z-0" />
      <AnimatedBlob className="w-64 h-64 bottom-20 right-20 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Easy <span className="gradient-text">Payment</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Pay with your preferred mobile wallet using MyanmarPay QR Code
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm p-6">
              <CardContent className="p-0 flex justify-center">
                <AnimatedQRCode />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">Supported Payment Methods</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {paymentMethods.map((method, index) => (
                <motion.div key={index} className="flex flex-col items-center" whileHover={{ y: -5 }}>
                  <motion.div
                    className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center mb-2 text-white font-bold`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [`0 0 0 rgba(0, 0, 0, 0)`, `0 0 20px ${method.color}`, `0 0 0 rgba(0, 0, 0, 0)`],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: index * 0.5,
                    }}
                  >
                    {method.name.substring(0, 1)}
                  </motion.div>
                  <span className="text-sm font-medium">{method.name}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-foreground/70">
              Simply scan the QR code with your mobile wallet app and confirm the payment to complete your purchase.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
