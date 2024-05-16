import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { TableRow, TableCell } from '@/components/ui/table'
import { Listing } from '@/lib/listings/types/Listing'
import { DeleteListingDropdownMenuItem } from '@/components/Listings/ListingsTable/ListingTableRow/DropdownMenuItems/DeleteListingDropdownMenuItem'
import { EditListingDropdownMenuItem } from '@/components/Listings/ListingsTable/ListingTableRow/DropdownMenuItems/EditListingDropdownMenuItem'

export function ListingTableRow({ listing }: { listing: Listing }) {
  return (
    <TableRow key={listing.id}>
      <TableCell className="font-medium">
        <a href={listing.url} target="_blank">
          <div className="md:whitespace-nowrap">{listing.title}</div>
        </a>
        <a href={listing.glassdoor_url || ''} target="_blank">
          <div>
            {listing.company}{' '}
            {listing.glassdoor_rating && <span>({listing.glassdoor_rating / 10})</span>}{' '}
            {listing.remote ? 'Remote' : 'Not Remote'}
          </div>
        </a>
        <div>{listing.product}</div>
      </TableCell>
      <TableCell>
        <div>{listing.compensation}</div>
        {listing.pto && <div>PTO {listing.pto}</div>}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div>{listing.description}</div>
        <div>{listing.notes}</div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div>{listing.based_in}</div>
        <div>{listing.timezones}</div>
      </TableCell>
      <TableCell className="hidden md:table-cell">{listing.stack}</TableCell>
      <TableCell className="hidden md:table-cell">{listing.preference}%</TableCell>
      <TableCell>
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
      </TableCell>
    </TableRow>
  )
}
