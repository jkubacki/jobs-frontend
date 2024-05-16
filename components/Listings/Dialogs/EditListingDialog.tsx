'use client'

import { z } from 'zod'

import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { ListingForm, listingFormSchema } from '@/components/Listings/ListingForm/ListingForm'
import { DialogHeader } from '@/components/ui/dialog'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'

export function EditListingDialog() {
  const editedListing = useAppSelector(ListingsSelectors.edited)
  const updating = useAppSelector(ListingsSelectors.updating)
  const updatingError = useAppSelector(ListingsSelectors.updatingError)
  const updatingFormOpen = useAppSelector(ListingsSelectors.updatingFormOpen)

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={updatingFormOpen}
      onOpenChange={(open: boolean) => {
        if (!open) dispatch(ListingsActions.setEdited({ listing: null }))
      }}
    >
      <DialogContent className="overflow-y-scroll max-h-[95%] sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Add Listing</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ListingForm
          onSubmit={(data: z.infer<typeof listingFormSchema>) => {
            if (editedListing) dispatch(ListingsActions.update({ data, listing: editedListing }))
          }}
          listing={editedListing}
          saving={updating}
          error={updatingError}
        />
      </DialogContent>
    </Dialog>
  )
}
