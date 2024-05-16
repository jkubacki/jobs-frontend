'use client'

import { PlusCircle } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { RadioTabs } from '@/components/RadioTabs/RadioTabs'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsActions, ListingsState } from '@/lib/listings/listingsSlice'
import { ListingsTable } from '@/components/Listings/ListingsTable'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'
import { ListingForm } from '@/components/ListingDialog/ListingForm'
import { Button } from '@/components/ui/button'

export function ListingsTab() {
  const dispatch = useAppDispatch()
  const remoteFilter = useAppSelector(ListingsSelectors.remoteFilter)
  const creatingFormOpen = useAppSelector(ListingsSelectors.creatingFormOpen)
  const updatingFormOpen = useAppSelector(ListingsSelectors.updatingFormOpen)
  const editedListing = useAppSelector(ListingsSelectors.edited)

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
          <Dialog
            open={creatingFormOpen}
            onOpenChange={(open: boolean) => {
              dispatch(ListingsActions.setCreatingFormOpen({ creatingFormOpen: open }))
            }}
          >
            <DialogTrigger asChild>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Listing</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="overflow-y-scroll max-h-[95%] sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
              <DialogHeader>
                <DialogTitle>Add Listing</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <ListingForm action={ListingsActions.create} listing={null} />
            </DialogContent>
          </Dialog>
          {/* <ListingDialog
            title="Edit Listing"
            listing={editedListing}
            action={ListingsActions.update}
            open={updatingFormOpen}
            onOpenChange={(open: boolean) => {
              if (!open) dispatch(ListingsActions.setEdited({ listing: null }))
            }}
          /> */}
        </div>
      </div>
      <ListingsTable />
    </>
  )
}
