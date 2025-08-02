"use client"

import { useState } from "react"
import { RestaurantImage } from "./restaurant-image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
  loading?: "lazy" | "eager"
  onLoad?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  sizes,
  priority = false,
  quality = 80,
  loading = "lazy",
  onLoad,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={cn("flex items-center justify-center bg-gray-200", className)}>
        <div className="text-gray-400 text-center p-4">
          <div className="text-2xl mb-2">🍽️</div>
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      <RestaurantImage
        src={src || "/images/hero-mexican-food.png"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
        sizes={sizes}
        priority={priority}
        quality={quality}
        loading={loading}
        onLoad={handleLoad}
        fallbackSrc="/images/hero-mexican-food.png"
      />
    </div>
  )
}
