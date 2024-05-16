'use client'

import { PlusCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ListingForm } from '@/components/ListingDialog/ListingForm'
import { useAppDispatch } from '@/lib/hooks'
import { ListingsActions } from '@/lib/listings/listingsSlice'

export function ListingDialog({
  title,
  action,
  open,
}: {
  title: string
  action: typeof ListingsActions.create | typeof ListingsActions.update
  open: boolean
}) {
  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={open}
      onOpenChange={(creatingFormOpen: boolean) => {
        dispatch(ListingsActions.setCreatingFormOpen({ creatingFormOpen }))
      }}
    >
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">{title}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-[95%] sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ListingForm action={action} />
      </DialogContent>
    </Dialog>
  )
}
