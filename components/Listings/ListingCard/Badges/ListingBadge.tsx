import { ReactNode } from 'react'

import { Badge } from '@/components/ui/badge'

export function ListingBadge({
  children,
  title,
  color,
}: {
  children: ReactNode
  title: string
  color?: string
}) {
  return (
    <Badge title={title} className={`flex gap-1 ${color}`}>
      {children}
    </Badge>
  )
}
