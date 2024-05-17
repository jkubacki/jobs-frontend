import { Badge } from '@/components/ui/badge'

export function RemoteBadge({ remote }: { remote: boolean }) {
  const badgeColor = remote ? 'bg-green-600' : 'bg-rose-400'

  return <Badge className={badgeColor}>{remote ? 'Remote' : 'Not Remote'}</Badge>
}
