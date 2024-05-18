import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ListingCardSkeleton() {
  return (
    <Card>
      <h1>
        <Skeleton />
      </h1>
    </Card>
  )
}
