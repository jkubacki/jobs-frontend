'use client'

import { z } from 'zod'

import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import {
  ApplicationForm,
  applicationFormSchema,
} from '@/components/Applications/ApplicationForm/ApplicationForm'
import { DialogHeader } from '@/components/ui/dialog'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ApplicationsSelectors } from '@/lib/applications/ApplicationsSelectors'

export function EditApplicationDialog() {
  const editedApplication = useAppSelector(ApplicationsSelectors.edited)
  const updating = useAppSelector(ApplicationsSelectors.updating)
  const updatingError = useAppSelector(ApplicationsSelectors.updatingError)
  const updatingFormOpen = useAppSelector(ApplicationsSelectors.updatingFormOpen)

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={updatingFormOpen}
      onOpenChange={(open: boolean) => {
        if (!open) dispatch(ApplicationsActions.setEdited({ application: null }))
      }}
    >
      <DialogContent className="overflow-y-scroll max-h-[95%] sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Edit Application</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ApplicationForm
          onSubmit={(data: z.infer<typeof applicationFormSchema>) => {
            if (editedApplication)
              dispatch(ApplicationsActions.update({ data, application: editedApplication }))
          }}
          application={editedApplication}
          saving={updating}
          error={updatingError}
        />
      </DialogContent>
    </Dialog>
  )
}
