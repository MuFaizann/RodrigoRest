import type { Metadata } from "next"
import { ImageGallery } from "@/components/image-gallery"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Photo Gallery | See Our Delicious Mexican Tacos & Food - Tulsa, OK",
  description:
    "Browse our photo gallery featuring mouth-watering Mexican tacos, burritos, and dishes at Rodrigos Taco Shop in Tulsa, OK. See why customers love our authentic Mexican cuisine.",
  keywords: [
    "Mexican food photos Tulsa",
    "taco shop gallery",
    "food photography",
    "Mexican dishes Tulsa",
    "restaurant interior",
    "authentic Mexican cuisine",
    "Rodrigos Taco Shop photos",
  ],
  openGraph: {
    title: "Photo Gallery | Rodrigos Taco Shop - Tulsa, OK",
    description: "Browse our photo gallery featuring mouth-watering Mexican tacos and dishes in Tulsa, OK.",
    images: [
      {
        url: "/gallery-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rodrigos Taco Shop Food Gallery - Tulsa, OK",
      },
    ],
  },
  alternates: {
    canonical: "/gallery",
  },
}

const galleryImages = [
  {
    src: "/images/restaurant-interior.png",
    alt: "Rodrigos Taco Shop interior with warm Mexican decor and comfortable seating",
  },
  {
    src: "/images/fish-tacos.png",
    alt: "Fresh fish tacos with cabbage slaw and chipotle mayo",
  },
  {
    src: "/images/sizzling-fajitas.png",
    alt: "Sizzling chicken and beef fajitas with peppers and onions",
  },
  {
    src: "/images/loaded-nachos.png",
    alt: "Loaded nachos with cheese, jalapeños, and fresh guacamole",
  },
  {
    src: "/images/grilled-shrimp.png",
    alt: "Grilled shrimp with Mexican spices and lime",
  },
  {
    src: "/images/kitchen-preparation.png",
    alt: "Kitchen staff preparing fresh Mexican tacos and dishes",
  },
  {
    src: "/images/chicken-enchiladas.png",
    alt: "Cheese enchiladas with red sauce and sour cream",
  },
  {
    src: "/images/fresh-ceviche.png",
    alt: "Fresh ceviche with shrimp, lime, and cilantro",
  },
  {
    src: "/images/dining-area.png",
    alt: "Main dining area with Mexican artwork and comfortable booths",
  },
  {
    src: "/images/churros-dessert.png",
    alt: "Traditional churros with cinnamon sugar and chocolate sauce",
  },
  {
    src: "/images/margaritas-drinks.png",
    alt: "Fresh margaritas and Mexican beverages",
  },
  {
    src: "/images/mexican-street-corn.png",
    alt: "Mexican street corn with cotija cheese and chili powder",
  },
]

export default function GalleryPage() {
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Rodrigos Taco Shop Photo Gallery",
    description: "Photo gallery showcasing our delicious Mexican tacos, dishes, and restaurant atmosphere in Tulsa, OK",
    image: galleryImages.map((img) => ({
      "@type": "ImageObject",
      url: `https://rodrigostacoshop.com${img.src}`,
      description: img.alt,
    })),
  }

  return (
    <div className="min-h-screen py-8 pt-24 mt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }} />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our delicious tacos and welcoming atmosphere in Tulsa, OK
          </p>
        </header>

        {/* Gallery Grid */}
        <section aria-labelledby="photo-gallery">
          <h2 id="photo-gallery" className="sr-only">
            Restaurant Photo Gallery
          </h2>
          <ImageGallery images={galleryImages} />
        </section>

        {/* Visit Us CTA */}
        <div className="text-center mt-16 p-8 bg-orange-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience It Yourself</h2>
          <p className="text-gray-600 mb-6">Visit us today and taste the authentic flavors that make us special</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              Get Directions
            </a>
            <a
              href="/order"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
