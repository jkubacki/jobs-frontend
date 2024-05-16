'use client'

import { PlusCircle } from 'lucide-react'
import { z } from 'zod'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ListingForm, listingFormSchema } from '@/components/Listings/ListingForm/ListingForm'
import { Button } from '@/components/ui/button'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'

export function CreateListingDialog() {
  const creatingFormOpen = useAppSelector(ListingsSelectors.creatingFormOpen)
  const dispatch = useAppDispatch()

  return (
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
        <ListingForm
          onSubmit={(data: z.infer<typeof listingFormSchema>) => {
            dispatch(ListingsActions.create(data))
          }}
          listing={null}
        />
      </DialogContent>
    </Dialog>
  )
}
