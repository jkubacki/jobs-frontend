import { useAppDispatch } from '@/lib/hooks'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

export function EditApplicationDropdownMenuItem({ application }: { application: Application }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(ApplicationsActions.setEdited({ application }))
  }

  return <DropdownMenuItem onClick={handleClick}>Edit</DropdownMenuItem>
}
