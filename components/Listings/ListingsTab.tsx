'use client'

import { PlusCircle } from 'lucide-react'

import { DialogTrigger } from '@/components/ui/dialog'
import { ListingDialog } from '@/components/ListingDialog/ListingDialog'
import { RadioTabs } from '@/components/RadioTabs/RadioTabs'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsActions, ListingsState } from '@/lib/listings/listingsSlice'
import { ListingsTable } from '@/components/Listings/ListingsTable'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'
import { Button } from '@/components/ui/button'

export function ListingsTab() {
  const dispatch = useAppDispatch()
  const remoteFilter = useAppSelector(ListingsSelectors.remoteFilter)
  const creatingFormOpen = useAppSelector(ListingsSelectors.creatingFormOpen)
  const updatingFormOpen = useAppSelector(ListingsSelectors.updatingFormOpen)

  const tabClick = (remoteFilter: ListingsState['remoteFilter']) => {
    dispatch(ListingsActions.setRemoteFilter({ remoteFilter }))
  }

  const tabs: {
    name: string
    value: ListingsState['remoteFilter']
  }[] = [
    { name: 'All', value: null },
    { name: 'Remote', value: true },
    { name: 'On site', value: false },
  ]

  return (
    <>
      <div className="flex items-center">
        <RadioTabs tabs={tabs} tabClick={tabClick} selected={remoteFilter} />
        <div className="ml-auto flex items-center gap-2">
          <ListingDialog
            title="Add Listing"
            action={ListingsActions.create}
            onOpenChange={(open: boolean) => {
              dispatch(ListingsActions.setCreatingFormOpen({ creatingFormOpen: open }))
            }}
            open={creatingFormOpen}
          >
            <DialogTrigger asChild>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Listing</span>
              </Button>
            </DialogTrigger>
          </ListingDialog>
          <ListingDialog
            title="Edit Listing"
            action={ListingsActions.update}
            open={updatingFormOpen}
            onOpenChange={(open: boolean) => {
              if (!open) dispatch(ListingsActions.setEdited({ listing: null }))
            }}
          />
        </div>
      </div>
      <ListingsTable />
    </>
  )
}
