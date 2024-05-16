import { ListingsTable } from '@/components/Listings/ListingsTable/ListingsTable'
import { CreateListingDialog } from '@/components/Listings/Dialogs/CreateListingDialog'
import { EditListingDialog } from '@/components/Listings/Dialogs/EditListingDialog'
import { RemoteRadioFilter } from '@/components/Listings/Filters/RemoteRadioFilter'

export function ListingsSection() {
  return (
    <>
      <div className="flex items-center">
        <RemoteRadioFilter />
        <div className="ml-auto flex items-center gap-2">
          <CreateListingDialog />
          <EditListingDialog />
        </div>
      </div>
      <ListingsTable />
    </>
  )
}
