import { ReplyCard } from '@/components/Replies/RepliesList/ReplyCard/ReplyCard'
import { Reply } from '@/lib/replies/types/Reply'

export function RepliesList({ replies }: { replies: Reply[] }) {
  return (
    <div className="w-full flex flex-col gap-3">
      {replies.map(reply => (
        <ReplyCard key={reply.id} reply={reply} />
      ))}
    </div>
  )
}
