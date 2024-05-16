import { ListingsSection } from '@/components/Listings/ListingsSection'
import { ApplicationsSection } from '@/components/Applications/ApplicationsSection'
import { NavigationAside } from '@/components/Navigation/NavigationAside'
import { NavigationHeader } from '@/components/Navigation/NavigationHeader'

export function Dashboard({ section }: { section: 'listings' | 'applications' }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <NavigationAside />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <NavigationHeader />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {section === 'listings' && <ListingsSection />}
          {section === 'applications' && <ApplicationsSection />}
        </main>
      </div>
    </div>
  )
}
