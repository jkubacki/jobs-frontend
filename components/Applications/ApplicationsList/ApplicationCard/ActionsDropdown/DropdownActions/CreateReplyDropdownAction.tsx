import { useAppDispatch } from '@/lib/hooks'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Application } from '@/lib/applications/types/Application'
import { RepliesActions } from '@/lib/replies/repliesSlice'

export function CreateReplyDropdownAction({ application }: { application: Application }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(RepliesActions.setReplyingTo({ application }))
  }

  return <DropdownMenuItem onClick={handleClick}>Add reply</DropdownMenuItem>
}
