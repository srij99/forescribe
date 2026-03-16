"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image src="/hero-bg.png" alt="Background" fill priority className="object-cover scale-100" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/100 via-black/80 to-purple-700/90" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Sign-in Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md rounded-2xl bg-black/40 backdrop-blur-sm shadow-2xl p-8 text-center"
        >
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image src="/icons/forescribe-logo.png" alt="Logo" width={45} height={45} />
          </div>

          {/* Title */}
          <h2 className="text-white text-xl font-semibold mb-6">Welcome to Forescribe</h2>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Button className="w-full h-10 bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-4 cursor-pointer transition-transform duration-200 hover:scale-105">
              <Image src="/icons/google.png" alt="Google" width={18} height={18} />
              Continue with Google
            </Button>

            <Button className="w-full h-10 bg-zinc-600 hover:bg-zinc-700 text-white flex items-center justify-center gap-2 cursor-pointer transition-transform duration-200 hover:scale-105">
              <Image src="/icons/microsoft.png" alt="Microsoft" width={18} height={18} />
              Continue with Microsoft
            </Button>
          </div>
        </motion.div>

        {/* Terms Text (outside the card) */}
        {/* Sign-in Card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs text-gray-300 mt-2 max-w-md leading-relaxed">
            By clicking “Continue with Google/Microsoft” above, you acknowledge that you have read and understood, and
            agree to Forescribe&apos;s{" "}
            <span className="underline cursor-pointer text-purple-500">Terms & Conditions</span> and{" "}
            <span className="underline cursor-pointer text-purple-500">Privacy Policy</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
