import { format } from 'date-fns'

import { Reply } from '@/lib/replies/types/Reply'
import { Card } from '@/components/ui/card'
import { PreferenceBadge } from '@/components/Listings/ListingCard/Badges/PreferenceBadge'
import { ReplyActionsDropdown } from '@/components/Replies/RepliesList/ReplyCard/ActionsDropdown/ReplyActionsDropdown'
import { RejectionBadge } from '@/components/Replies/RepliesList/ReplyCard/Badges/RejectionBadge'

export function ReplyCard({ reply }: { reply: Reply }) {
  return (
    <Card
      className="max-w-screen-md flex flex-col items-center gap-4 font-normal p-3 text-sm"
      title="Reply"
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-sm">
          {reply.by_me ? 'Me' : 'Company'} - {format(reply.sent_at, 'PPP')}
        </div>
        <ReplyActionsDropdown reply={reply} />
      </div>
      {reply.body && <div className="text-muted-foreground">{reply.body}</div>}
      {reply.notes && <div className="text-muted-foreground">{reply.notes}</div>}
      <div className="flex gap-1 justify-between w-full">
        <div className="flex gap-1">
          <RejectionBadge rejection={reply.rejection} />
          <PreferenceBadge preference={reply.preference} />
        </div>
      </div>
    </Card>
  )
}
