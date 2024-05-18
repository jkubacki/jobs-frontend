import { BriefcaseBusiness, Code, FileText } from 'lucide-react'
import Link from 'next/link'

import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'

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
        <Separator />
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/"
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
              href="https://github.com/jkubacki/jobs"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Code className="h-5 w-5 transition-all hover:scale-110" />
              <span className="sr-only">Source code</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Source code</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://jakubkubacki.com"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <FileText className="h-5 w-5 transition-all hover:scale-110" />
              <span className="sr-only">Jakub Kubacki CV</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Jakub Kubacki CV</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  )
}
