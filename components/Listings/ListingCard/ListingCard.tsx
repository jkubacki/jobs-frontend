import { Clock, Coins, Link, Map, MoreHorizontal, TreePalm, Wrench } from 'lucide-react'

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
import { Badge } from '@/components/ui/badge'
import { PreferenceBadge } from '@/components/Listings/ListingCard/Badges/PreferenceBadge'
import { ContentItem } from '@/components/Listings/ListingCard/ContentItem'

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
        <CardDescription className="flex flex-col gap-1">
          {listing.description}
          {listing.notes && <span>{listing.notes}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 flex-col md:gap-4 md:flex-row">
        <ContentItem icon={<Coins />} content={listing.compensation} title="Compensation" />
        <ContentItem icon={<TreePalm />} content={listing.pto} title="PTO" />
        <ContentItem icon={<Wrench />} content={listing.stack} title="Stack" />
      </CardContent>
      <CardFooter>
        <div className="flex gap-1">
          <PreferenceBadge preference={listing.preference} />
          <RemoteBadge remote={listing.remote} />
          <GlassdoorBadge rating={listing.glassdoor_rating} url={listing.glassdoor_url} />
          <Badge>
            <Clock className="h-4" />
            {listing.timezones}
          </Badge>
          <Badge>
            <Map className="h-4" />
            {listing.based_in}
          </Badge>
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
