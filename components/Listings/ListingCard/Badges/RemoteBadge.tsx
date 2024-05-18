import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'
import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'

export function RemoteBadge({ remote }: { remote: boolean }) {
  const badgeColor = remote ? BadgeColors.positive : BadgeColors.negative

  return (
    <ListingBadge color={badgeColor} title="Remote work?">
      {remote ? 'Remote' : 'On site'}
    </ListingBadge>
  )
}
