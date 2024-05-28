import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { RepliesState, RepliesTypes } from '@/lib/replies/repliesSlice'

export function createFailureReducer(
  state: Draft<RepliesState>,
  action: PayloadAction<{ error: RepliesTypes['creatingError'] }>
) {
  state.creating = false
  state.creatingError = action.payload.error
}
