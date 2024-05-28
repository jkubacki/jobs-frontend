import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DeleteApplicationDropdownAction } from '@/components/Applications/ApplicationsList/ApplicationCard/ActionsDropdown/DropdownActions/DeleteApplicationDropdownAction'
import { EditApplicationDropdownAction } from '@/components/Applications/ApplicationsList/ApplicationCard/ActionsDropdown/DropdownActions/EditApplicationDropdownAction'
import { Application } from '@/lib/applications/types/Application'
import { ReplyToDropdownAction } from '@/components/Applications/ApplicationsList/ApplicationCard/ActionsDropdown/DropdownActions/ReplyToDropdownAction'

export function ApplicationActionsDropdown({ application }: { application: Application }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" aria-haspopup="true" variant="ghost" className="h-5">
          <MoreHorizontal className="h-3 w-3" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <ReplyToDropdownAction application={application} />
        <EditApplicationDropdownAction application={application} />
        <DeleteApplicationDropdownAction application={application} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
