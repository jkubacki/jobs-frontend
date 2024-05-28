import { CreateListingDialog } from '@/components/Listings/Dialogs/CreateListingDialog'
import { EditListingDialog } from '@/components/Listings/Dialogs/EditListingDialog'
import { RemoteRadioFilter } from '@/components/Listings/Filters/RemoteRadioFilter'
import { NavigationHeader } from '@/components/Navigation/NavigationHeader'
import { ListingsBreadcrumbs } from '@/components/Navigation/Breadcrumbs/ListingsBreadcrumbs'
import { SearchListings } from '@/components/Listings/Filters/SearchListings'
import { ListingsList } from '@/components/Listings/ListingsList/ListingsList'
import { CreateApplicationDialog } from '@/components/Applications/Dialogs/CreateApplicationDialog'
import { EditApplicationDialog } from '@/components/Applications/Dialogs/EditApplicationDialog'
import { CreateReplyDialog } from '@/components/Replies/Dialogs/CreateReplyDialog'
import { ShowRejectedFilter } from '@/components/Listings/Filters/ShowRejectedFilter'

export function ListingsSection() {
  return (
    <>
      <NavigationHeader>
        <ListingsBreadcrumbs />
        <div className="relative ml-auto flex-1 md:grow-0">
          <SearchListings />
        </div>
      </NavigationHeader>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="flex items-center">
          <div className="flex gap-2">
            <RemoteRadioFilter />
            <ShowRejectedFilter />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <CreateListingDialog />
            <CreateApplicationDialog />
            <CreateReplyDialog />
            <EditListingDialog />
            <EditApplicationDialog />
          </div>
        </div>
        <ListingsList />
      </main>
    </>
  )
}
