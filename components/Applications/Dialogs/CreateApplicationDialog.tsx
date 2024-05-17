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
import { ApplicationForm, applicationFormSchema } from '@/components/Applications/ApplicationForm/ApplicationForm'
import { Button } from '@/components/ui/button'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ApplicationsSelectors } from '@/lib/applications/ApplicationsSelectors'

export function CreateApplicationDialog() {
  const creating = useAppSelector(ApplicationsSelectors.creating)
  const creatingError = useAppSelector(ApplicationsSelectors.creatingError)
  const creatingFormOpen = useAppSelector(ApplicationsSelectors.creatingFormOpen)

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={creatingFormOpen}
      onOpenChange={(open: boolean) => {
        dispatch(ApplicationsActions.setCreatingFormOpen({ creatingFormOpen: open }))
      }}
    >
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Application</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-[95%] sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Add Application</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ApplicationForm
          onSubmit={(data: z.infer<typeof applicationFormSchema>) => {
            dispatch(ApplicationsActions.create(data))
          }}
          application={null}
          saving={creating}
          error={creatingError}
        />
      </DialogContent>
    </Dialog>
  )
}
