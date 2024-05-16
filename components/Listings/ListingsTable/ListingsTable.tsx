'use client'

import { useEffect } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Table, TableBody } from '@/components/ui/table'
import { ListingTableRow } from '@/components/Listings/ListingsTable/ListingTableRow/ListingTableRow'
import { ListingsTableHeaders } from '@/components/Listings/ListingsTable/ListingsTableHeaders'
import { ErrorAlert } from '@/components/ErrorAlert'
import { ListingTablePlaceholderRow } from '@/components/Listings/ListingsTable/ListingTablePlaceholderRow'
import { LoadNextPageListingsButton } from '@/components/Listings/ListingsTable/LoadNextPageListingsButton'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'
import { ListingsActions } from '@/lib/listings/listingsSlice'

export function ListingsTable() {
  const dispatch = useAppDispatch()
  const listings = useAppSelector(ListingsSelectors.listings)
  const loading = useAppSelector(ListingsSelectors.loading)
  const loadingError = useAppSelector(ListingsSelectors.loadingError)
  const metadata = useAppSelector(ListingsSelectors.metadata)
  const moreListingsAvailable = useAppSelector(ListingsSelectors.moreListingsAvailable)

  useEffect(() => {
    dispatch(ListingsActions.load({ page: 1 }))
  }, [dispatch])

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Listings</CardTitle>
        <CardDescription>Manage your listings.</CardDescription>
      </CardHeader>
      <CardContent>
        {loadingError && <ErrorAlert title="Couldn't load listings" description={loadingError} />}
        <Table>
          <ListingsTableHeaders />
          <TableBody>
            {listings.map(listing => (
              <ListingTableRow key={listing.id} listing={listing} />
            ))}
            {loading && (
              <>
                {Array.from({ length: 10 }, (_, index) => index + 1).map((index: number) => (
                  <ListingTablePlaceholderRow key={index} />
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        {metadata.total > 0 && (
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{metadata.to}</strong> of <strong>{metadata.total}</strong> listings
          </div>
        )}
        {moreListingsAvailable && <LoadNextPageListingsButton className="m-4" />}
      </CardFooter>
    </Card>
  )
}
