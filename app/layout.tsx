import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Forescribe",
  description: "Frontend assignment",
  icons: {
    icon: "icons/forescribe-logo.png"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
