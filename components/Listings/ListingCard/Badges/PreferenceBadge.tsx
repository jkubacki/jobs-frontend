import { Heart } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

export function PreferenceBadge({ preference }: { preference: number }) {
  return (
    <Badge title="My preference">
      <Heart className="h-4" />
      {preference}%
    </Badge>
  )
}
