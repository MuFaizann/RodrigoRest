"use client"

import { OptimizedImage } from "./optimized-image"
import { Card, CardContent } from "@/components/ui/card"

interface MenuItemProps {
  name: string
  description: string
  price: string
  image?: string
}

export function MenuItemCard({ name, description, price, image }: MenuItemProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48">
        <OptimizedImage
          src={image || "/placeholder.svg?height=200&width=300&query=delicious mexican food"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={75}
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <span className="text-lg font-bold text-red-600 ml-2 flex-shrink-0">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
