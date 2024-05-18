import Link from 'next/link'
import { BriefcaseBusiness, Code, List, PanelLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function NavigationHeader({ children }: { children: React.ReactNode }) {
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
              <BriefcaseBusiness className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Jobs</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <List className="h-5 w-5" />
              Listings
            </Link>
            <Link
              href="https://github.com/jkubacki/jobs"
              target="_blank"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Code className="h-5 w-5" />
              Source code
            </Link>
            <Link
              href="https://jakubkubacki.com"
              target="_blank"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Code className="h-5 w-5" />
              Jakub Kubacki CV
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      {children}
    </header>
  )
}
