import { Link, MoreHorizontal } from 'lucide-react'

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
import { RemoteBadge } from '@/components/Listings/ListingCard/Badges/RemoteBadge'
import { GlassdoorBadge } from '@/components/Listings/ListingCard/Badges/GlassdoorBadge'

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 text-lg items-center">
          {listing.title}
          <a href={listing.url} target="_blank">
            <Link className="h-4 w-4" />
          </a>
        </CardTitle>
        <div className="text-md">
          {listing.company} - {listing.product}
        </div>
        <CardDescription>{listing.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>{listing.compensation}</div>
        {listing.pto && <div>PTO {listing.pto}</div>}
        <div>{listing.notes}</div>
        <div>{listing.based_in}</div>
        <div>{listing.timezones}</div>
        <div>{listing.stack}</div>
        <div>{listing.preference}%</div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-1">
          <RemoteBadge remote={listing.remote} />
          <GlassdoorBadge rating={listing.glassdoor_rating} />
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
