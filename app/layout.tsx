import type React from "react"
import type { Metadata } from "next"
import { Inter, Nunito_Sans } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

const inter = Inter({ subsets: ["latin"] })
const nunitoSans = Nunito_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Rodrigos Taco Shop | Authentic Mexican Tacos & Food in Tulsa, OK | (918) 605-5061",
    template: "%s | Rodrigos Taco Shop",
  },
  description:
    "Experience authentic Mexican tacos and cuisine at Rodrigos Taco Shop in Tulsa, OK. Open 7 AM-12 AM daily. Call (918) 605-5061 or order online through DoorDash, Caviar, Postmates, or UberEats. Located at 1956 S Garnett Rd.",
  keywords: [
    "Mexican restaurant Tulsa",
    "taco shop Tulsa",
    "authentic Mexican food",
    "tacos Tulsa OK",
    "burritos",
    "enchiladas",
    "Mexican food delivery Tulsa",
    "Garnett Road restaurant",
    "DoorDash Tulsa",
    "UberEats Tulsa",
    "Postmates Tulsa",
    "Caviar delivery",
    "Rodrigos Taco Shop",
    "Mexican restaurant 74128",
    "(918) 605-5061",
    "918-605-5061",
    "Tulsa Mexican restaurant phone",
  ],
  authors: [{ name: "Rodrigos Taco Shop" }],
  creator: "Rodrigos Taco Shop",
  publisher: "Rodrigos Taco Shop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rodrigostacoshop.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rodrigostacoshop.com",
    siteName: "Rodrigos Taco Shop",
    title: "Rodrigos Taco Shop | Authentic Mexican Tacos & Food in Tulsa, OK | (918) 605-5061",
    description:
      "Experience authentic Mexican tacos and cuisine at Rodrigos Taco Shop in Tulsa, OK. Call (918) 605-5061 or order online for delivery!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rodrigos Taco Shop - Authentic Mexican Tacos in Tulsa, OK - Call (918) 605-5061",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigos Taco Shop | Authentic Mexican Tacos & Food in Tulsa, OK | (918) 605-5061",
    description:
      "Experience authentic Mexican tacos and cuisine in Tulsa, OK. Call (918) 605-5061 or order online for delivery!",
    images: ["/twitter-image.jpg"],
    creator: "@RodrigosTacos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.className} font-nunito`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
