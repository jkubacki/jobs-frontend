import { HeartCrack } from 'lucide-react'

import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'
import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'

export function RejectedBadge({ rejected }: { rejected: boolean }) {
  if (!rejected) return null

  return (
    <ListingBadge title="My preference" color={BadgeColors.negative}>
      <HeartCrack className="h-4 w-4" /> Rejected
    </ListingBadge>
  )
}
