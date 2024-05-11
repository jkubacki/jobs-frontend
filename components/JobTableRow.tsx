import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { TableRow, TableCell } from '@/components/ui/table'
import { Job } from '@/lib/jobs/types/Job'

export function JobTableRow({ job }: { job: Job }) {
  return (
    <TableRow key={job.id}>
      <TableCell className="font-medium">
        <a href={job.url} target="_blank">
          <div className="whitespace-nowrap">{job.title}</div>
        </a>
        <a href={job.glassdoor_url} target="_blank">
          <div>
            {job.company} {job.glassdoor_rating && <span>({job.glassdoor_rating / 10})</span>}{' '}
            {job.remote ? 'Remote' : 'Not Remote'}
          </div>
        </a>
        <div>{job.product}</div>
      </TableCell>
      <TableCell>
        <div>{job.compensation}</div>
        {job.pto && <div>PTO {job.pto}</div>}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div>{job.description}</div>
        <div>{job.notes}</div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div>{job.based_in}</div>
        <div>{job.timezones}</div>
      </TableCell>
      <TableCell className="hidden md:table-cell">{job.stack}</TableCell>
      <TableCell className="hidden md:table-cell">{job.preference}%</TableCell>
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
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
