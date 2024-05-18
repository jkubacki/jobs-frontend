import { useAppDispatch } from '@/lib/hooks'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'

export function EditApplicationDropdownAction({ application }: { application: Application }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(ApplicationsActions.setEdited({ application }))
  }

  return <DropdownMenuItem onClick={handleClick}>Edit</DropdownMenuItem>
}
