import type { Metadata } from "next"
import MenuClientPage from "./MenuClientPage"

export const metadata: Metadata = {
  title: "Menu | Authentic Mexican Tacos & Food in Tulsa, OK",
  description:
    "Explore our authentic Mexican menu featuring tacos, burritos, enchiladas, quesadillas, and more at Rodrigos Taco Shop in Tulsa, OK. Made with traditional recipes and fresh ingredients.",
  keywords: [
    "Mexican menu Tulsa",
    "taco menu",
    "restaurant menu",
    "burritos Tulsa",
    "tacos Tulsa",
    "enchiladas",
    "quesadillas",
    "Mexican food prices",
    "Rodrigos Taco Shop menu",
    "Garnett Road restaurant",
  ],
  openGraph: {
    title: "Menu | Rodrigos Taco Shop - Tulsa, OK",
    description: "Explore our authentic Mexican menu featuring tacos, burritos, enchiladas, and more in Tulsa, OK.",
    images: [
      {
        url: "/menu-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rodrigos Taco Shop Menu - Tulsa, OK",
      },
    ],
  },
  alternates: {
    canonical: "/menu",
  },
}

export default function MenuPage() {
  return <MenuClientPage />
}
