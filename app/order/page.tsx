import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Clock, Truck } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Order Online | Food Delivery from Rodrigos Taco Shop - Tulsa, OK",
  description:
    "Order authentic Mexican tacos and food online for delivery in Tulsa, OK. Available on DoorDash, UberEats, Postmates, and Caviar. Fast delivery from 1956 S Garnett Rd.",
  keywords: [
    "order online Tulsa",
    "food delivery Tulsa",
    "Mexican food delivery",
    "DoorDash Tulsa",
    "UberEats Tulsa",
    "Postmates Tulsa",
    "Caviar delivery",
    "online ordering",
    "delivery service",
    "Rodrigos Taco Shop delivery",
  ],
  openGraph: {
    title: "Order Online | Rodrigos Taco Shop - Tulsa, OK",
    description:
      "Order authentic Mexican tacos online for delivery in Tulsa, OK through DoorDash, UberEats, Postmates, and Caviar.",
    images: [
      {
        url: "/order-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Order Mexican Tacos Online for Delivery - Tulsa, OK",
      },
    ],
  },
  alternates: {
    canonical: "/order",
  },
}

const deliveryPlatforms = [
  {
    name: "DoorDash",
    description: "Fast delivery with real-time tracking",
    logo: "/images/doordash-logo.png",
    url: "https://doordash.com",
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    name: "UberEats",
    description: "Quick and reliable food delivery",
    logo: "/images/ubereats-logo.png",
    url: "https://ubereats.com",
    color: "bg-black hover:bg-gray-800",
  },
  {
    name: "Postmates",
    description: "Your favorite food, delivered fast",
    logo: "/images/postmates-logo.png",
    url: "https://postmates.com",
    color: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    name: "Caviar",
    description: "Premium food delivery service",
    logo: "/images/caviar-logo.png",
    url: "https://trycaviar.com",
    color: "bg-purple-600 hover:bg-purple-700",
  },
]

export default function OrderPage() {
  const orderSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Order Online - Rodrigos Taco Shop",
    description:
      "Order authentic Mexican tacos and food online for delivery in Tulsa, OK through DoorDash, UberEats, Postmates, and Caviar",
    mainEntity: {
      "@type": "Restaurant",
      name: "Rodrigos Taco Shop",
      hasDeliveryService: {
        "@type": "DeliveryService",
        name: "Third-party delivery",
        provider: deliveryPlatforms.map((platform) => ({
          "@type": "Organization",
          name: platform.name,
          url: platform.url,
        })),
      },
    },
  }

  return (
    <div className="min-h-screen py-8 pt-24 mt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orderSchema) }} />

      <div className="max-w-6xl mx-auto px-4 mt-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Order Online</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your favorite Mexican tacos and dishes delivered right to your door in Tulsa, OK through our trusted
            delivery partners
          </p>
        </header>

        {/* Delivery Info */}
        <section className="grid md:grid-cols-3 gap-6 mb-12" aria-labelledby="delivery-info">
          <h2 id="delivery-info" className="sr-only">
            Delivery Information
          </h2>
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Average delivery time: 30-45 minutes</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fresh & Hot</h3>
              <p className="text-gray-600">Food prepared fresh and delivered hot</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <ExternalLink className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Easy Ordering</h3>
              <p className="text-gray-600">Simple ordering through your favorite app</p>
            </CardContent>
          </Card>
        </section>

        {/* Delivery Platforms */}
        <section className="space-y-6" aria-labelledby="delivery-platforms">
          <h2 id="delivery-platforms" className="text-2xl font-bold text-center text-gray-800 mb-8">
            Choose Your Delivery Platform
          </h2>

          {deliveryPlatforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="relative h-20 w-48">
                      <Image
                        src={platform.logo || "/placeholder.svg"}
                        alt={`${platform.name} logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 200px, 200px"
                        loading="lazy"
                        quality={90}
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{platform.name}</h3>
                      <p className="text-gray-600">{platform.description}</p>
                    </div>
                  </div>

                  <Button asChild size="lg" className={`${platform.color} text-white min-w-[150px]`}>
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <span>Order Now</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Popular Items */}
        <section className="mt-16" aria-labelledby="popular-items">
          <h2 id="popular-items" className="text-2xl font-bold text-center text-gray-800 mb-8">
            Popular for Delivery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/carne-asada-burrito.png"
                  alt="Carne Asada Burrito"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Carne Asada Burrito</h3>
                <p className="text-gray-600 text-sm">Our most popular burrito - perfect for delivery!</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/fish-tacos.png"
                  alt="Fish Tacos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Fish Tacos (3)</h3>
                <p className="text-gray-600 text-sm">Fresh and flavorful - travels well!</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/combination-plate.png"
                  alt="Combination Plate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Combination Plate</h3>
                <p className="text-gray-600 text-sm">Great value with multiple items!</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hungry? Order Now!</h2>
          <p className="text-gray-600 mb-6">
            Don't wait - your favorite Mexican tacos and dishes are just a few clicks away
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <a href="/menu">View Full Menu</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
            >
              <a href="/contact">Call to Order: (555) 123-4567</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
