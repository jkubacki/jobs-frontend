'use client'

import { useAppSelector } from '@/lib/hooks'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'
import { ErrorAlert } from '@/components/ErrorAlert'
import { ListingCard } from '@/components/Listings/ListingCard/ListingCard'
import { ListingCardSkeleton } from '@/components/Listings/ListingCard/ListingCardSkeleton'
import { LoadNextPageListingsButton } from '@/components/Listings/ListingsList/LoadNextPageListingsButton'

export function ListingsList() {
  const listings = useAppSelector(ListingsSelectors.listings)
  const loading = useAppSelector(ListingsSelectors.loading)
  const loadingError = useAppSelector(ListingsSelectors.loadingError)
  const metadata = useAppSelector(ListingsSelectors.metadata)
  const moreListingsAvailable = useAppSelector(ListingsSelectors.moreListingsAvailable)

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-full">
        {loadingError && <ErrorAlert title="Couldn't load listings" description={loadingError} />}
        <div className="flex flex-col gap-5">
          {listings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
        {loading && (
          <>
            {Array.from({ length: 10 }, (_, index) => index + 1).map((index: number) => (
              <ListingCardSkeleton key={index} />
            ))}
          </>
        )}
      </div>
      <div>
        {metadata.total > 0 && (
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{metadata.to}</strong> of <strong>{metadata.total}</strong> listings
          </div>
        )}
        {moreListingsAvailable && <LoadNextPageListingsButton className="m-4" />}
      </div>
    </div>
  )
}
