import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { RepliesState } from '@/lib/replies/repliesSlice'
import { ReplyFormPayload } from '@/components/Replies/ReplyForm/defaultValues'

export function replyToReducer(
  state: Draft<RepliesState>,
  _action: PayloadAction<{ replyingTo: RepliesState['replyingTo']; data: ReplyFormPayload }>
) {
  state.replyingError = null
}
