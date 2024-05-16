import Link from 'next/link'
import { BriefcaseBusiness, PanelLeft, SendHorizonal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SearchListings } from '@/components/Listings/Filters/SearchListings'
import { Breadcrumbs } from '@/components/Navigation/Breadcrumbs/Breadcrumbs'

export function NavigationHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <div className="text-sm transition-all group-hover:scale-110">JBS</div>
              <span className="sr-only">Jobs</span>
            </Link>
            <Link
              href="listings"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <BriefcaseBusiness className="h-5 w-5" />
              Listings
            </Link>
            <Link
              href="applications"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <SendHorizonal className="h-5 w-5" />
              Applications
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumbs />
      <div className="relative ml-auto flex-1 md:grow-0">
        <SearchListings />
      </div>
    </header>
  )
}
