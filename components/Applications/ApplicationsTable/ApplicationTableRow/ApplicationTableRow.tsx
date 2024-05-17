import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { TableRow, TableCell } from '@/components/ui/table'
import { Application } from '@/lib/applications/types/Application'
import { DeleteApplicationDropdownMenuItem } from '@/components/Applications/ApplicationsTable/ApplicationTableRow/DropdownMenuItems/DeleteApplicationDropdownMenuItem'
import { EditApplicationDropdownMenuItem } from '@/components/Applications/ApplicationsTable/ApplicationTableRow/DropdownMenuItems/EditApplicationDropdownMenuItem'

export function ApplicationTableRow({ application }: { application: Application }) {
  return (
    <TableRow key={application.id}>
      <TableCell className="font-medium">
        <a href={application.url} target="_blank">
          <div className="md:whitespace-nowrap">{application.title}</div>
        </a>
        <a href={application.glassdoor_url || ''} target="_blank">
          <div>
            {application.company}{' '}
            {application.glassdoor_rating && <span>({application.glassdoor_rating / 10})</span>}{' '}
            {application.remote ? 'Remote' : 'Not Remote'}
          </div>
        </a>
        <div>{application.product}</div>
      </TableCell>
      <TableCell>
        <div>{application.compensation}</div>
        {application.pto && <div>PTO {application.pto}</div>}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div>{application.description}</div>
        <div>{application.notes}</div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div>{application.based_in}</div>
        <div>{application.timezones}</div>
      </TableCell>
      <TableCell className="hidden md:table-cell">{application.stack}</TableCell>
      <TableCell className="hidden md:table-cell">{application.preference}%</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <EditApplicationDropdownMenuItem application={application} />
            <DeleteApplicationDropdownMenuItem application={application} />
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
