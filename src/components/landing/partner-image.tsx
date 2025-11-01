"use client"

import Image from "next/image"
import type { SyntheticEvent } from "react"

interface PartnerImageProps {
  src: string
  alt: string
  name: string // For fallback text
  width?: number
  height?: number
  className?: string
}

export function PartnerImage({
  src,
  alt,
  name,
  width = 180,
  height = 90,
  className = "object-contain max-h-full max-w-full",
}: PartnerImageProps) {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback to a placeholder SVG if the image fails to load
    e.currentTarget.src = `/placeholder.svg?width=${width}&height=${height}&text=${encodeURIComponent(name)}`
    // You might also want to set width/height attributes directly on e.currentTarget if the placeholder has different intrinsic dimensions
  }

  return (
    <Image
      src={src || `/placeholder.svg?width=${width}&height=${height}&text=${encodeURIComponent(name)}`} // Provide initial placeholder if src is empty
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleImageError} // This event handler will now work correctly
    />
  )
}
