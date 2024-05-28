import { createSlice } from '@reduxjs/toolkit'

import { NotNullableTypes } from '@/utils/types/NotNullableTypes'
import { Application } from '@/lib/applications/types/Application'
import { setReplyingToReducer } from '@/lib/replies/actions/setReplyingTo/setReplyingToReducer'
import { replyToReducer } from '@/lib/replies/actions/replyTo/replyToReducer'

export interface RepliesState {
  replyingTo: Application | null
  replyingError: string | null
}
export type RepliesTypes = NotNullableTypes<RepliesState>

const initialState: RepliesState = {
  replyingTo: null,
  replyingError: null,
}

const name = 'replies'

const repliesSlice = createSlice({
  name,
  initialState,
  reducers: {
    setReplyingTo: setReplyingToReducer,
    replyTo: replyToReducer,
  },
})

export default repliesSlice
export const RepliesActions = repliesSlice.actions
