import { Clock, Coins, Link, Map, TreePalm, Wrench } from 'lucide-react'

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
import { PreferenceBadge } from '@/components/Listings/ListingCard/Badges/PreferenceBadge'
import { ContentItem } from '@/components/Listings/ListingCard/ContentItem'
import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'
import { ActionsDropdown } from '@/components/Listings/ListingCard/ActionsDropdown/ActionsDropdown'

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 text-lg items-center">
          {listing.title}
          <a href={listing.url} target="_blank">
            <Link className="h-4 w-4" />
          </a>
          <ActionsDropdown listing={listing} />
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
        <div className="flex gap-1.5 flex-wrap">
          <RemoteBadge remote={listing.remote} />
          <PreferenceBadge preference={listing.preference} />
          <GlassdoorBadge rating={listing.glassdoor_rating} url={listing.glassdoor_url} />
          {listing.timezones && (
            <ListingBadge title="Timezones">
              <Clock className="h-4 w-4" />
              {listing.timezones}
            </ListingBadge>
          )}
          <ListingBadge title="Based in">
            <Map className="h-4 w-4" />
            {listing.based_in}
          </ListingBadge>
        </div>
      </CardFooter>
    </Card>
  )
}
