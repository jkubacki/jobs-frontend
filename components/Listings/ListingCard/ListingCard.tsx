import { MoreHorizontal } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { DeleteListingDropdownMenuItem } from '@/components/Listings/ListingsTable/ListingTableRow/DropdownMenuItems/DeleteListingDropdownMenuItem'
import { EditListingDropdownMenuItem } from '@/components/Listings/ListingsTable/ListingTableRow/DropdownMenuItems/EditListingDropdownMenuItem'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Listing } from '@/lib/listings/types/Listing'
import { Badge } from '@/components/ui/badge'
import { RemoteBadge } from '@/components/Listings/ListingCard/Badges/RemoteBadge'

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{listing.title}</CardTitle>
        <div className="text-md">{listing.company}</div>
        <CardDescription>{listing.product}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>{listing.url}</div>
        <div>{listing.compensation}</div>
        {listing.pto && <div>PTO {listing.pto}</div>}
        <div>{listing.description}</div>
        <div>{listing.notes}</div>
        <div>{listing.based_in}</div>
        <div>{listing.timezones}</div>
        <div>{listing.stack}</div>
        <div>{listing.preference}%</div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-1">
          <RemoteBadge remote={listing.remote} />
          {listing.glassdoor_rating && (
            <Badge>Glassdoor {listing.glassdoor_rating / 10}</Badge>
          )}{' '}
        </div>
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
      </CardFooter>
    </Card>
  )
}
