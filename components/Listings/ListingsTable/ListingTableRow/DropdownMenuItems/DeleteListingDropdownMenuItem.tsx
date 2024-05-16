import { useAppDispatch } from '@/lib/hooks'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

export function DeleteListingDropdownMenuItem({ listing }: { listing: Listing }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(ListingsActions.delete({ listing }))
  }

  return <DropdownMenuItem onClick={handleClick}>Delete</DropdownMenuItem>
}
