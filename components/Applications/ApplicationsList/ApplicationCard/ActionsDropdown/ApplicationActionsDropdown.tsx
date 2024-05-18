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

export function ApplicationActionsDropdown({ application }: { application: Application }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <EditApplicationDropdownAction application={application} />
        <DeleteApplicationDropdownAction application={application} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
