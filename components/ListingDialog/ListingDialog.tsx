'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ListingForm } from '@/components/ListingDialog/ListingForm'
import { useAppDispatch } from '@/lib/hooks'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'

export function ListingDialog({
  title,
  listing,
  action,
  onOpenChange,
  open,
  children,
}: {
  title: string
  listing: Listing | null
  action: typeof ListingsActions.create | typeof ListingsActions.update
  onOpenChange: (open: boolean) => void
  open: boolean
  children?: React.ReactNode
}) {
  const dispatch = useAppDispatch()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children}
      <DialogContent className="overflow-y-scroll max-h-[95%] sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ListingForm action={action} listing={listing} />
      </DialogContent>
    </Dialog>
  )
}
