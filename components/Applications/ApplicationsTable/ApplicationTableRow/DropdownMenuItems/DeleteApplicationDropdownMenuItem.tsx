import { useAppDispatch } from '@/lib/hooks'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

export function DeleteApplicationDropdownMenuItem({ application }: { application: Application }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(ApplicationsActions.delete({ application }))
  }

  return <DropdownMenuItem onClick={handleClick}>Delete</DropdownMenuItem>
}
