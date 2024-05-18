'use client'

import { z } from 'zod'

import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { ListingForm, listingFormSchema } from '@/components/Listings/ListingForm/ListingForm'
import { DialogHeader } from '@/components/ui/dialog'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ApplicationsSelectors } from '@/lib/applications/ApplicationsSelectors'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'

export function CreateApplicationDialog() {
  const creatingFor = useAppSelector(ApplicationsSelectors.creatingFor)
  const updating = useAppSelector(ApplicationsSelectors.updating)
  const updatingError = useAppSelector(ApplicationsSelectors.updatingError)

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={!!creatingFor}
      onOpenChange={(open: boolean) => {
        if (!open) dispatch(ApplicationsActions.setCreatingFor({ listing: null }))
      }}
    >
      <DialogContent className="overflow-y-scroll max-h-[95%] sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Edit Listing</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ListingForm
          onSubmit={(data: z.infer<typeof listingFormSchema>) => {
            if (creatingFor) dispatch(ApplicationsActions.create({ data, listing: creatingFor }))
          }}
          listing={creatingFor}
          saving={updating}
          error={updatingError}
        />
      </DialogContent>
    </Dialog>
  )
}
