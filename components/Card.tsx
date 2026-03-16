"use client"

import Image from "next/image"
import { CardData } from "@/types/card"

export default function Card({ title, subtitle, rectangleColor, image, isReview, width, height }: CardData) {
  return (
    <div className="relative w-full rounded-md bg-white shadow-md overflow-hidden">
      {/* Top Rectangle */}
      <div
        className="relative h-[120px] flex items-center justify-center m-3 rounded-lg"
        style={{ backgroundColor: rectangleColor }}
      >
        <Image src={image} alt={title} width={width} height={height} className="object-contain mt-1" />
      </div>

      {/* Gradient Overlay (only when not review) */}
      {!isReview && (
        <div
          className="absolute inset-x-0 bottom-0 h-32 "
          style={{
            background: `linear-gradient(to top, ${rectangleColor}88, transparent)`
          }}
        />
      )}

      {/* Bottom Text */}
      <div className="relative z-10 text-center px-4 py-6 mt-10 mb-10">
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>

        <p className="text-sm text-zinc-700">{subtitle}</p>
      </div>
    </div>
  )
}
