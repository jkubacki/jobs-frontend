import { useAppDispatch } from '@/lib/hooks'
import { Listing } from '@/lib/listings/types/Listing'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'

export function AppliedDropdownAction({ listing }: { listing: Listing }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(ApplicationsActions.setCreatingFor({ listing }))
  }

  return <DropdownMenuItem onClick={handleClick}>Applied</DropdownMenuItem>
}
