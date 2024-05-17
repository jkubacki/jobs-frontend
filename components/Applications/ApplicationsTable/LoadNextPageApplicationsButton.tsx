import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/lib/hooks'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'

export function LoadNextPageApplicationsButton({ className }: { className?: string }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(ApplicationsActions.loadNextPage())
  }
  return (
    <Button onClick={handleClick} className={className}>
      Load more
    </Button>
  )
}
