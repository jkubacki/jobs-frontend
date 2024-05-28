import { createSlice } from '@reduxjs/toolkit'

import { NotNullableTypes } from '@/utils/types/NotNullableTypes'
import { Application } from '@/lib/applications/types/Application'
import { setReplyingToReducer } from '@/lib/replies/actions/setReplyingTo/setReplyingToReducer'
import { createReducer } from '@/lib/replies/actions/create/createReducer'
import { deleteReducer } from '@/lib/replies/actions/delete/deleteReducer'

export interface RepliesState {
  replyingTo: Application | null
  creating: boolean
  creatingError: string | null
}
export type RepliesTypes = NotNullableTypes<RepliesState>

const initialState: RepliesState = {
  replyingTo: null,
  creating: false,
  creatingError: null,
}

const name = 'replies'

const repliesSlice = createSlice({
  name,
  initialState,
  reducers: {
    setReplyingTo: setReplyingToReducer,
    create: createReducer,
    delete: deleteReducer,
  },
})

export default repliesSlice
export const RepliesActions = repliesSlice.actions
