import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Listing } from '@/lib/listings/types/Listing'

export function ListingCardSkeleton({ listing }: { listing: Listing }) {
  return (
    <Card>
      <h1>
        <Skeleton />
      </h1>
    </Card>
  )
}
