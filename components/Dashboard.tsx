import Link from 'next/link'
import { BriefcaseBusiness, PanelLeft, SendHorizonal } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ListingsSection } from '@/components/Listings/ListingsSection'
import { ApplicationsSection } from '@/components/Applications/ApplicationsSection'
import { SearchListings } from '@/components/Listings/Filters/SearchListings'

export function Dashboard({ section }: { section: 'listings' | 'applications' }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <div className="text-xs transition-all group-hover:scale-110">JBS</div>
            <span className="sr-only">Jobs</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="listings"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <BriefcaseBusiness className="h-5 w-5 transition-all hover:scale-110" />
                <span className="sr-only">Listings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Listings</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="applications"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <SendHorizonal className="h-5 w-5 transition-all hover:scale-110" />
                <span className="sr-only">Applications</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Applications</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
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
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="listings">Listings</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Listings</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <SearchListings />
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {section === 'listings' && <ListingsSection />}
          {section === 'applications' && <ApplicationsSection />}
        </main>
      </div>
    </div>
  )
}
