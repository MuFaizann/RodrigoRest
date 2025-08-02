"use client"

import { GoogleMaps } from "./google-maps"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock, Phone } from "lucide-react"

interface MapSectionProps {
  businessName: string
  address: string
  phone: string
  hours: Array<{ day: string; time: string }>
}

export function MapSection({ businessName, address, phone, hours }: MapSectionProps) {
  const encodedAddress = encodeURIComponent(address)
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`

  return (
    <section className="py-12" aria-labelledby="location-map">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 id="location-map" className="text-3xl font-bold text-gray-800 mb-4">
            Find Us on the Map
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Tulsa on Garnett Road. Easy parking and convenient access for dine-in, takeout, or
            pickup orders.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <GoogleMaps address={address} businessName={businessName} className="h-96 lg:h-[500px]" />
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic text-gray-600 mb-4">
                  <strong className="text-gray-800">{businessName}</strong>
                  <br />
                  {address}
                </address>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-red-600" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  <a href={`tel:${phone.replace(/\D/g, "")}`} className="hover:text-red-600 transition-colors">
                    {phone}
                  </a>
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  <a href={`tel:+19186055061`} className="flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-600" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700">{schedule.day}:</span>
                      <time className="text-gray-600">{schedule.time}</time>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Location Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Easy to Find</h3>
              <p className="text-gray-600 text-sm">
                Located on busy Garnett Road with clear signage and easy access from major Tulsa roads.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Free Parking</h3>
              <p className="text-gray-600 text-sm">
                Ample free parking available for all customers. No need to worry about finding a spot!
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Call Ahead</h3>
              <p className="text-gray-600 text-sm">
                Call ahead for large orders or if you have questions about our menu and ingredients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
