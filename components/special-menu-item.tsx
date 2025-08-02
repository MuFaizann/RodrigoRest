import Image from "next/image"
import { cn } from "@/lib/utils"

interface SpecialMenuItemProps {
  name: string
  description: string
  price?: string | null
  image: string
  className?: string
}

export function SpecialMenuItem({ name, description, price, image, className }: SpecialMenuItemProps) {
  return (
    <div className={cn("flex items-start gap-4 py-4 border-b border-gray-600 last:border-b-0", className)}>
      <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden shadow-md">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" sizes="80px" quality={75} />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          {price && <span className="text-lg font-bold text-orange-400 ml-2 flex-shrink-0">{price}</span>}
        </div>
        <p className="text-gray-200 text-sm whitespace-pre-line">{description}</p>
      </div>
    </div>
  )
}
