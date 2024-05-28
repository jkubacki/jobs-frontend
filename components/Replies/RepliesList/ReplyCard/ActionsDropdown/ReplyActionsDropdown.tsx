import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DeleteReplyDropdownAction } from '@/components/Replies/RepliesList/ReplyCard/ActionsDropdown/DropdownActions/DeleteReplyDropdownAction'
import { Reply } from '@/lib/replies/types/Reply'

export function ReplyActionsDropdown({ reply }: { reply: Reply }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" aria-haspopup="true" variant="ghost" className="h-5">
          <MoreHorizontal className="h-3 w-3" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DeleteReplyDropdownAction reply={reply} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
