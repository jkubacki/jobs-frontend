import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { RepliesState } from '@/lib/replies/repliesSlice'

export function setCreatingForReducer(
  state: Draft<RepliesState>,
  action: PayloadAction<{ application: RepliesState['creatingFor'] }>
) {
  const { application } = action.payload

  state.creatingFor = application
}
