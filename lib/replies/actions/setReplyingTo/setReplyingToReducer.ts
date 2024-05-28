import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { RepliesState } from '@/lib/replies/repliesSlice'

export function setReplyingToReducer(
  state: Draft<RepliesState>,
  action: PayloadAction<{ application: RepliesState['replyingTo'] }>
) {
  const { application } = action.payload

  state.replyingTo = application
}
