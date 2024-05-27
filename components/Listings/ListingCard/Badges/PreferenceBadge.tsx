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
    <div data-testid="PreferenceBadge" className={`PreferenceBadge ${color}`}>
      <ListingBadge title="My preference">
        <Heart className="h-4 w-4" />
        {preference}%
      </ListingBadge>
    </div>
  )
}
