import { createSlice } from '@reduxjs/toolkit'

import { NotNullableTypes } from '@/utils/types/NotNullableTypes'
import { Application } from '@/lib/applications/types/Application'
import { setReplyingToReducer } from '@/lib/replies/actions/setReplyingTo/setReplyingToReducer'
import { createReducer } from '@/lib/replies/actions/create/createReducer'

export interface RepliesState {
  replyingTo: Application | null
  replying: boolean
  replyingError: string | null
}
export type RepliesTypes = NotNullableTypes<RepliesState>

const initialState: RepliesState = {
  replyingTo: null,
  replying: false,
  replyingError: null,
}

const name = 'replies'

const repliesSlice = createSlice({
  name,
  initialState,
  reducers: {
    setReplyingTo: setReplyingToReducer,
    create: createReducer,
  },
})

export default repliesSlice
export const RepliesActions = repliesSlice.actions
