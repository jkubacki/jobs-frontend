import { HeartCrack } from 'lucide-react'

import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'
import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'

export function RejectedBadge({ rejected }: { rejected: boolean }) {
  if (!rejected) return null

  return (
    <div data-testid="RejectedBadge" className={`RejectedBadge ${BadgeColors.negative}`}>
      <ListingBadge title="My preference">
        <HeartCrack className="h-4 w-4" /> Rejected
      </ListingBadge>
    </div>
  )
}
