import { HeartHandshake } from 'lucide-react'

import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'
import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'

export function GlassdoorBadge({ rating, url }: { rating: number | null; url: string | null }) {
  if (!rating) return null

  const ratingDecimal = rating / 10

  const color =
    ratingDecimal >= 4
      ? BadgeColors.positive
      : ratingDecimal >= 3.6
        ? BadgeColors.neutral
        : BadgeColors.negative

  const badge = (
    <ListingBadge title="Glasdoor rating" color={color}>
      <HeartHandshake className="h-4 w-4" />
      {ratingDecimal}
    </ListingBadge>
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
