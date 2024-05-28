import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Reply } from '@/lib/replies/types/Reply'

export function RepliesBadge({ replies }: { replies: Reply[] }) {
  const repiesCount = replies.length
  const repliesWord = repiesCount === 1 ? 'reply' : 'replies'

  return (
    <ListingBadge title="Cover letter sent">
      <Dialog>
        <DialogTrigger>
          {repiesCount === 0 ? 'no' : repiesCount} {repliesWord}
        </DialogTrigger>
        <DialogContent className="sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
          {replies.map(reply => (
            <div key={reply.id} className="flex gap-1">
              <div>{reply.sent_at}</div>
              <div>{reply.body}</div>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </ListingBadge>
  )
}
