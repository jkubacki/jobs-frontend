import { TableRow, TableCell } from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

export function ListingTablePlaceholderRow() {
  return (
    <TableRow>
      <TableCell>
        <Skeleton className="h-10 w-100" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-10 w-100" />
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Skeleton className="h-10 w-100" />
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Skeleton className="h-10 w-100" />
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Skeleton className="h-10 w-100" />
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Skeleton className="h-10 w-100" />
      </TableCell>
    </TableRow>
  )
}
