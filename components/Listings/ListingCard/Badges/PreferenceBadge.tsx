import { Heart } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'

export function PreferenceBadge({ preference }: { preference: number }) {
  const color =
    preference >= 75
      ? BadgeColors.positive
      : preference >= 50
        ? BadgeColors.neutral
        : BadgeColors.negative

  return (
    <Badge title="My preference" className={`flex gap-1 ${color}`}>
      <Heart className="h-4 w-4" />
      {preference}%
    </Badge>
  )
}
