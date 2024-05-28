import { Heart } from 'lucide-react'

import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'
import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'

export function PreferenceBadge({ preference }: { preference: number }) {
  const color =
    preference >= 75
      ? BadgeColors.positive
      : preference >= 50
        ? BadgeColors.neutral
        : BadgeColors.negative

  return (
    <ListingBadge title="My preference" color={color}>
      <Heart className="h-4 w-4" />
      {preference}%
    </ListingBadge>
  )
}
