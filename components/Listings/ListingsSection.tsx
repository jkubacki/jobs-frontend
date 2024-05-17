import { ListingsTable } from '@/components/Listings/ListingsTable/ListingsTable'
import { CreateListingDialog } from '@/components/Listings/Dialogs/CreateListingDialog'
import { EditListingDialog } from '@/components/Listings/Dialogs/EditListingDialog'
import { RemoteRadioFilter } from '@/components/Listings/Filters/RemoteRadioFilter'
import { NavigationHeader } from '@/components/Navigation/NavigationHeader'

export function ListingsSection() {
  return (
    <>
      <NavigationHeader />
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
