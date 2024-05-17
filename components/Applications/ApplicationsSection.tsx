import { ApplicationsTable } from '@/components/Applications/ApplicationsTable/ApplicationsTable'
import { CreateApplicationDialog } from '@/components/Applications/Dialogs/CreateApplicationDialog'
import { EditApplicationDialog } from '@/components/Applications/Dialogs/EditApplicationDialog'
import { RemoteRadioFilter } from '@/components/Applications/Filters/RemoteRadioFilter'
import { NavigationHeader } from '@/components/Navigation/NavigationHeader'
import { ApplicationsBreadcrumbs } from '@/components/Applications/ApplicationsBreadcrumbs'
import { SearchApplications } from '@/components/Applications/Filters/SearchApplications'

export function ApplicationsSection() {
  return (
    <>
      <NavigationHeader>
        <ApplicationsBreadcrumbs />
        <div className="relative ml-auto flex-1 md:grow-0">
          <SearchApplications />
        </div>
      </NavigationHeader>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="flex items-center">
          <RemoteRadioFilter />
          <div className="ml-auto flex items-center gap-2">
            <CreateApplicationDialog />
            <EditApplicationDialog />
          </div>
        </div>
        <ApplicationsTable />
      </main>
    </>
  )
}
