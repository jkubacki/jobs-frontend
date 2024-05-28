import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'
import { RepliesList } from '@/components/Replies/RepliesList/RepliesList'
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
          <RepliesList replies={replies} />
        </DialogContent>
      </Dialog>
    </ListingBadge>
  )
}
