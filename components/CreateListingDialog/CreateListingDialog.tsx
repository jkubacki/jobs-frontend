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
import { CreateListingForm } from '@/components/CreateListingDialog/CreateListingForm'

export function CreateListingDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Job Listing</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1275px]">
        <DialogHeader>
          <DialogTitle>Add Job Listing</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CreateListingForm />
      </DialogContent>
    </Dialog>
  )
}
