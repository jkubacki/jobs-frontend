import { isApplicationRejected } from '@/lib/applications/utils/isApplicationRejected'
import { Listing } from '@/lib/listings/types/Listing'

export function isListingRejected(listing: Listing) {
  return (
    listing.applications.length > 0 &&
    listing.applications.every(application => isApplicationRejected(application))
  )
}
