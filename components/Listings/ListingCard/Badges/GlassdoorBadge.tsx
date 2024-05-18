import { Star, StarHalf } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'

export function GlassdoorBadge({ rating, url }: { rating: number | null; url: string | null }) {
  if (!rating) return null

  const ratingDecimal = rating / 10
  const fullStars = Math.floor(ratingDecimal)
  const halfStar = ratingDecimal % 1 >= 0.5

  const color =
    ratingDecimal >= 4
      ? BadgeColors.positive
      : ratingDecimal >= 3.6
        ? BadgeColors.neutral
        : BadgeColors.negative

  const badge = (
    <Badge className={`flex gap-1 ${color}`} title="Glasdoor rating">
      <div className="flex">
        {Array.from({ length: fullStars }, (_, i) => (
          <Star key={i} className="h-3 w-3" />
        ))}
        {halfStar && <StarHalf className="h-3 w-3.5" />}
      </div>
      {ratingDecimal}
    </Badge>
  )

  if (url) {
    return (
      <a href={url} target="_blank">
        {badge}
      </a>
    )
  } else {
    return badge
  }
}
