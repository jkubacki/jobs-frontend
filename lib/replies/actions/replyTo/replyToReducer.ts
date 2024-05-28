import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { RepliesState, RepliesTypes } from '@/lib/replies/repliesSlice'
import { ReplyFormPayload } from '@/components/Replies/ReplyForm/defaultValues'

export function replyToReducer(
  state: Draft<RepliesState>,
  _action: PayloadAction<{ application: RepliesTypes['replyingTo']; data: ReplyFormPayload }>
) {
  state.replyingError = null
}
