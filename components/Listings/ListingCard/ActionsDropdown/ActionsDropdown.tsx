import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Listing } from '@/lib/listings/types/Listing'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DeleteListingDropdownMenuItem } from '@/components/Listings/ListingCard/ActionsDropdown/DropdownMenuItems/DeleteListingDropdownMenuItem'
import { EditListingDropdownMenuItem } from '@/components/Listings/ListingCard/ActionsDropdown/DropdownMenuItems/EditListingDropdownMenuItem'

export function ActionsDropdown({ listing }: { listing: Listing }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <EditListingDropdownMenuItem listing={listing} />
        <DeleteListingDropdownMenuItem listing={listing} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
