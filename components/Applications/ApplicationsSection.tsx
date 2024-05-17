import { ListingsTable } from '@/components/Listings/ListingsTable/ListingsTable'
import { CreateListingDialog } from '@/components/Listings/Dialogs/CreateListingDialog'
import { EditListingDialog } from '@/components/Listings/Dialogs/EditListingDialog'
import { RemoteRadioFilter } from '@/components/Listings/Filters/RemoteRadioFilter'
import { NavigationHeader } from '@/components/Navigation/NavigationHeader'
import { SearchListings } from '@/components/Listings/Filters/SearchListings'
import { ListingsBreadcrumbs } from '@/components/Listings/ListingsBreadcrumbs'

export function ApplicationsSection() {
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
          <RemoteRadioFilter />
          <div className="ml-auto flex items-center gap-2">
            <CreateListingDialog />
            <EditListingDialog />
          </div>
        </div>
        <ListingsTable />
      </main>
    </>
  )
}
