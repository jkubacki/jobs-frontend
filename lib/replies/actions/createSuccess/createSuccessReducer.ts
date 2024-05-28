import { Draft } from '@reduxjs/toolkit'

import { RepliesState } from '@/lib/replies/repliesSlice'

export function createSuccessReducer(state: Draft<RepliesState>) {
  state.creating = false
  state.creatingError = null
  state.creatingFor = null
}
