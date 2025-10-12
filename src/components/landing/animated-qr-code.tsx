"use client"

import { motion } from "framer-motion"

export function AnimatedQRCode() {
  // Generate a 7x7 grid for the QR code
  const qrMatrix = Array(7)
    .fill(0)
    .map(() =>
      Array(7)
        .fill(0)
        .map(() => Math.random() > 0.6),
    )

  // Ensure the corner squares are always filled (like real QR codes)
  qrMatrix[0][0] = true
  qrMatrix[0][1] = true
  qrMatrix[1][0] = true
  qrMatrix[1][1] = true

  qrMatrix[0][5] = true
  qrMatrix[0][6] = true
  qrMatrix[1][5] = true
  qrMatrix[1][6] = true

  qrMatrix[5][0] = true
  qrMatrix[5][1] = true
  qrMatrix[6][0] = true
  qrMatrix[6][1] = true

  // Center square for scanning animation
  qrMatrix[3][3] = true

  return (
    <div className="relative w-64 h-64 mx-auto">
      <motion.div
        className="absolute inset-0 bg-primary/20 rounded-lg blur-xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10 w-full h-full p-4 bg-background border border-primary/30 rounded-lg glow">
        <div className="w-full h-full grid grid-cols-7 grid-rows-7 gap-1">
          {qrMatrix.map((row, rowIndex) =>
            row.map((isActive, colIndex) => (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                className={`${isActive ? "bg-primary" : "bg-transparent"} rounded-sm`}
                initial={{ opacity: isActive ? 1 : 0 }}
                animate={{
                  opacity: isActive ? [0.7, 1, 0.7] : 0,
                  scale: isActive && rowIndex === 3 && colIndex === 3 ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: (rowIndex + colIndex) * 0.05,
                }}
              />
            )),
          )}
        </div>

        {/* Scanning line animation */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-primary/50"
          animate={{
            top: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* MyanmarPay logo placeholder */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <motion.div
            className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary font-bold"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            MyanmarPay
          </motion.div>
        </div>
      </div>
    </div>
  )
}
