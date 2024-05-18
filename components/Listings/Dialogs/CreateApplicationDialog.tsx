'use client'

import { z } from 'zod'

import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { DialogHeader } from '@/components/ui/dialog'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ApplicationsSelectors } from '@/lib/applications/ApplicationsSelectors'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import {
  ApplicationForm,
  applicationFormSchema,
} from '@/components/Listings/ApplicationForm/ApplicationForm'

export function CreateApplicationDialog() {
  const creatingFor = useAppSelector(ApplicationsSelectors.creatingFor)
  const creating = useAppSelector(ApplicationsSelectors.creating)
  const creatingError = useAppSelector(ApplicationsSelectors.creatingError)

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
          <DialogTitle>Add Application</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ApplicationForm
          onSubmit={(data: z.infer<typeof applicationFormSchema>) => {
            if (creatingFor) dispatch(ApplicationsActions.create({ data, listing: creatingFor }))
          }}
          application={null}
          saving={creating}
          error={creatingError}
        />
      </DialogContent>
    </Dialog>
  )
}
