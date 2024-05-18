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
    <Badge variant={'outline'} title={title} className={`flex gap-1 ${color}`}>
      {children}
    </Badge>
  )
}
