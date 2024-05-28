import { useAppDispatch } from '@/lib/hooks'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { RepliesActions } from '@/lib/replies/repliesSlice'
import { Reply } from '@/lib/replies/types/Reply'

export function DeleteReplyDropdownAction({ reply }: { reply: Reply }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(RepliesActions.delete({ reply }))
  }

  return <DropdownMenuItem onClick={handleClick}>Delete</DropdownMenuItem>
}
