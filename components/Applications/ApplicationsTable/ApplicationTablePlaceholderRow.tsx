import { TableRow, TableCell } from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

const SkeletonCell = () => <Skeleton className="h-20 w-100" />

export function ApplicationTablePlaceholderRow() {
  return (
    <TableRow>
      <TableCell>
        <SkeletonCell />
      </TableCell>
      <TableCell>
        <SkeletonCell />
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <SkeletonCell />
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <SkeletonCell />
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <SkeletonCell />
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <SkeletonCell />
      </TableCell>
    </TableRow>
  )
}
