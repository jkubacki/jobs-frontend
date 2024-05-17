import { Badge } from '@/components/ui/badge'

export function GlassdoorBadge({ rating }: { rating: number | null }) {
  if (!rating) return null

  return <Badge>Glassdoor {rating / 10}</Badge>
}
