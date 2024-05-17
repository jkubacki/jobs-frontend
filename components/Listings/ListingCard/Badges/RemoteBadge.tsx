import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'
import { Badge } from '@/components/ui/badge'

export function RemoteBadge({ remote }: { remote: boolean }) {
  const badgeColor = remote ? BadgeColors.positive : BadgeColors.negative

  return <Badge className={badgeColor}>{remote ? 'Remote' : 'Not Remote'}</Badge>
}
