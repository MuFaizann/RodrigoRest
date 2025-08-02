import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { MapSection } from "@/components/map-section"

export const metadata: Metadata = {
  title: "Location & Contact | Visit Rodrigos Taco Shop in Tulsa, OK",
  description:
    "Visit Rodrigos Taco Shop at 1956 S Garnett Rd, Tulsa, OK 74128. Get directions, hours, phone number, and contact information. Open 7 AM-12 AM daily, Fri-Sat until 2 AM.",
  keywords: [
    "restaurant location Tulsa",
    "contact information",
    "restaurant hours",
    "directions Tulsa",
    "phone number",
    "restaurant address",
    "visit restaurant",
    "Garnett Road Tulsa",
    "74128",
  ],
  openGraph: {
    title: "Location & Contact | Rodrigos Taco Shop - Tulsa, OK",
    description: "Visit us at 1956 S Garnett Rd, Tulsa, OK. Get directions, hours, and contact information.",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rodrigos Taco Shop Location - Tulsa, OK",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
}

const businessHours = [
  { day: "Sunday", time: "7:00 AM - 12:00 AM" },
  { day: "Monday", time: "7:00 AM - 12:00 AM" },
  { day: "Tuesday", time: "7:00 AM - 12:00 AM" },
  { day: "Wednesday", time: "7:00 AM - 12:00 AM" },
  { day: "Thursday", time: "7:00 AM - 12:00 AM" },
  { day: "Friday", time: "7:00 AM - 2:00 AM" },
  { day: "Saturday", time: "7:00 AM - 2:00 AM" },
]

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Rodrigos Taco Shop",
    description: "Contact information and location details for Rodrigos Taco Shop in Tulsa, OK",
    mainEntity: {
      "@type": "Restaurant",
      name: "Rodrigos Taco Shop",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1956 S Garnett Rd",
        addressLocality: "Tulsa",
        addressRegion: "OK",
        postalCode: "74128",
        addressCountry: "US",
      },
      telephone: "+19186055061",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "36.1314",
        longitude: "-95.8911",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "07:00",
          closes: "00:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "07:00",
          closes: "00:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Saturday"],
          opens: "07:00",
          closes: "02:00",
        },
      ],
    },
  }

  return (
    <div className="min-h-screen py-8 pt-24 mt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Location & Contact</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find us, call us, or send us a message. We'd love to hear from you!
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <section aria-labelledby="contact-info">
            <h2 id="contact-info" className="sr-only">
              Contact Information
            </h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span>Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="text-gray-600 mb-4 not-italic">
                    1956 S Garnett Rd
                    <br />
                    Tulsa, OK 74128
                  </address>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <a
                      href="https://maps.google.com/?q=1956+S+Garnett+Rd,+Tulsa,+OK+74128"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-red-600" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    <a href="tel:+19186055061" className="hover:text-red-600 transition-colors">
                      (918) 605-5061
                    </a>
                  </p>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                    <a href="tel:+19186055061">Call Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-red-600" />
                    <span>Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{schedule.day}:</span>
                        <time>{schedule.time}</time>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Form */}
          <section aria-labelledby="contact-form">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-red-600" />
                  <span id="contact-form">Send Us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" action="/api/contact" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <Input id="firstName" name="firstName" required placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <Input id="lastName" name="lastName" required placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone (Optional)
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us how we can help you..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Send Message
                  </Button>
                  <div className="text-center mt-4">
                    <a href="/contact">Call to Order: (918) 605-5061</a>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Interactive Map Section */}
        <MapSection
          businessName="Rodrigos Taco Shop"
          address="1956 S Garnett Rd, Tulsa, OK 74128"
          phone="(918) 605-5061"
          hours={businessHours}
        />
      </div>
    </div>
  )
}
