"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Smartphone, QrCode, CreditCard, Settings2 } from "lucide-react" // Using Settings2
import { AnimatedTechLines } from "./animated-tech-patterns" // Using lines for this section

const steps = [
  {
    icon: Smartphone,
    title: "Choose Your eSIM",
    description: "Select your preferred telecom provider and plan that suits your needs from our diverse range.",
  },
  {
    icon: QrCode,
    title: "Scan QR Code",
    description: "Effortlessly scan the MyanmarPay QR code with your mobile wallet application.",
  },
  {
    icon: CreditCard,
    title: "Complete Payment",
    description: "Securely confirm your payment through your preferred mobile wallet or card.",
  },
  {
    icon: CheckCircle2,
    title: "Activate Instantly",
    description: "Receive activation instructions via email and get connected within minutes to enjoy your service.",
  },
]

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
    },
  },
}

const stepItemVariants = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      delay: index * 0.2,
    },
  },
})

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background text-slate-100 relative overflow-hidden">
      <AnimatedTechLines className="opacity-30" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-[-1]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Settings2 className="mx-auto h-12 w-12 text-cyan-400 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Getting your eSIM is a breeze with our straightforward process. Follow these simple steps to connect.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Connection line - enhanced with animation */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-500/30 hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepItemVariants(index)}
                className="relative md:flex items-center group"
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-10 lg:pr-16" : "md:pl-10 lg:pl-16 md:order-2"}`}>
                  <div className="bg-slate-800/70 backdrop-blur-md p-6 rounded-lg border border-slate-700 shadow-lg transition-all duration-300 group-hover:border-cyan-500/70 group-hover:shadow-cyan-500/20">
                    <div className="flex items-center mb-3">
                      <div
                        className={`h-10 w-10 rounded-full bg-cyan-500/20 border-2 border-cyan-500/50 flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-cyan-500/30 group-hover:scale-105 ${index % 2 !== 0 && "md:ml-auto md:mr-0 md:order-2"}`}
                      >
                        <step.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <h3 className={`text-xl font-semibold text-slate-100 ${index % 2 !== 0 && "md:text-right"}`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className={`text-slate-300 text-sm ${index % 2 !== 0 && "md:text-right"}`}>{step.description}</p>
                  </div>
                </div>
                {/* Central Step Number Circle - enhanced */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-cyan-500 text-cyan-400 font-bold text-lg shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-cyan-500/40 ${index % 2 === 0 ? "md:-right-6" : "md:-left-6"}`}
                >
                  {index + 1}
                </div>
                <div className="md:w-1/2"></div> {/* Spacer div */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
