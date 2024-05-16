import { BriefcaseBusiness, SendHorizonal } from 'lucide-react'
import Link from 'next/link'

import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

export function NavigationAside() {
  return (
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
  )
}
