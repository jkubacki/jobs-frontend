import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/lib/hooks'
import { ListingsActions } from '@/lib/listings/listingsSlice'

export function LoadNextPageListingsButton({ className }: { className?: string }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(ListingsActions.loadNextPage())
  }
  return (
    <Button onClick={handleClick} className={className}>
      Load more
    </Button>
  )
}
