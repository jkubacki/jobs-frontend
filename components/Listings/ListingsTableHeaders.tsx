import { TableRow, TableHead, TableHeader } from '@/components/ui/table'

export function ListingsTableHeaders() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Listing</TableHead>
        <TableHead>Compensation</TableHead>
        <TableHead className="hidden md:table-cell">Description</TableHead>
        <TableHead className="hidden md:table-cell">Location / Timezones</TableHead>
        <TableHead className="hidden md:table-cell">Stack</TableHead>
        <TableHead className="hidden md:table-cell">Preference</TableHead>
        <TableHead>
          <span className="sr-only">Actions</span>
        </TableHead>
      </TableRow>
    </TableHeader>
  )
}
