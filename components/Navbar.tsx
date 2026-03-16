"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LetterCascade } from "./ui/letter-cascade"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center ">
        <div className="flex items-center mt-3 ">
          <Image src="/icons/forescribe-logo.png" alt="Logo" width={45} height={45} />
        </div>

        <LetterCascade text="forescribe" className="text-xl font-bold" />
      </div>
    </motion.nav>
  )
}
