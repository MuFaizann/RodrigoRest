"use client"

import { useState } from "react"
import { MapPin, ExternalLink, Navigation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GoogleMapsProps {
  address: string
  businessName: string
  className?: string
}

export function GoogleMaps({ address, businessName, className = "" }: GoogleMapsProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Encode the address for Google Maps URLs
  const encodedAddress = encodeURIComponent(address)
  const encodedBusinessName = encodeURIComponent(businessName)

  // Google Maps embed URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-EYABCs&q=${encodedAddress}&zoom=15&maptype=roadmap`

  // Google Maps directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`

  // Google Maps search URL
  const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodedBusinessName}+${encodedAddress}`

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  if (hasError) {
    return (
      <div className={`bg-gray-100 rounded-lg p-8 text-center ${className}`}>
        <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Find Us Here</h3>
        <p className="text-gray-600 mb-4">{address}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </Button>
          <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
            <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              View on Google Maps
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}

      {/* Google Maps Embed */}
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing location of ${businessName}`}
          onLoad={handleLoad}
          onError={handleError}
          className="rounded-lg"
        />

        {/* Map Controls Overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button asChild size="sm" className="bg-white/90 text-gray-700 hover:bg-white shadow-md">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
              title="Get directions"
            >
              <Navigation className="h-3 w-3" />
              <span className="hidden sm:inline">Directions</span>
            </a>
          </Button>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="bg-white/90 border-gray-300 text-gray-700 hover:bg-white shadow-md"
          >
            <a
              href={searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
              title="View larger map"
            >
              <ExternalLink className="h-3 w-3" />
              <span className="hidden sm:inline">View Larger</span>
            </a>
          </Button>
        </div>

        {/* Business Info Overlay */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs">
          <h4 className="font-semibold text-gray-800 mb-1">{businessName}</h4>
          <p className="text-sm text-gray-600 mb-2">{address}</p>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-xs">
              <a href="tel:+15551234567" className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
