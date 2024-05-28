import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { RepliesState } from '@/lib/replies/repliesSlice'
import { ReplyFormPayload } from '@/components/Replies/ReplyForm/defaultValues'
import { Application } from '@/lib/applications/types/Application'

export function createReducer(
  state: Draft<RepliesState>,
  _action: PayloadAction<{ application: Application; data: ReplyFormPayload }>
) {
  state.creatingError = null
  state.creating = true
}
