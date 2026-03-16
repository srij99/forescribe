"use client"

import cards from "@/data/cards.json"
import Card from "./Card"
import { CardData } from "@/types/card"
import { motion } from "framer-motion"

export default function CardSection() {
  const columnCount = 5
  const columns: CardData[][] = Array.from({ length: columnCount }, () => [])

  const totalCards = cards.length
  const lastThreeStart = totalCards - 3

  cards.forEach((card, index) => {
    if (index >= lastThreeStart) {
      const positions = [0, 2, 4]
      const posIndex = index - lastThreeStart
      columns[positions[posIndex]].push(card)
    } else {
      columns[index % columnCount].push(card)
    }
  })

  return (
    <section className="relative w-full overflow-hidden py-1 bg-zinc-900">
      {/* ---------- MOBILE / TABLET ---------- */}
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-1 lg:hidden">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut"
            }}
            className="flex justify-center"
          >
            <Card {...card} />
          </motion.div>
        ))}
      </div>

      {/* ---------- DESKTOP ---------- */}
      <div className="hidden lg:grid mx-auto w-full grid-cols-5 gap-1">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={`flex flex-col gap-1 ${columnIndex % 2 !== 0 ? "mt-35" : ""}`}>
            {column.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
              >
                <Card {...card} />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
