import { useAppDispatch } from '@/lib/hooks'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Application } from '@/lib/applications/types/Application'
import { RepliesActions } from '@/lib/replies/repliesSlice'

export function ReplyToDropdownAction({ application }: { application: Application }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(RepliesActions.setReplyingTo({ application }))
  }

  return <DropdownMenuItem onClick={handleClick}>Reply to</DropdownMenuItem>
}
