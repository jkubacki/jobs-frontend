import { createSlice } from '@reduxjs/toolkit'

import { NotNullableTypes } from '@/utils/types/NotNullableTypes'
import { Application } from '@/lib/applications/types/Application'
import { createReducer } from '@/lib/replies/actions/create/createReducer'
import { deleteReducer } from '@/lib/replies/actions/delete/deleteReducer'
import { createSuccessReducer } from '@/lib/replies/actions/createSuccess/createSuccessReducer'
import { createFailureReducer } from '@/lib/replies/actions/createFailure/createFailureReducer'
import { setCreatingForReducer } from '@/lib/replies/actions/setCreatingFor/setCreatingForReducer'

export interface RepliesState {
  creatingFor: Application | null
  creating: boolean
  creatingError: string | null
}
export type RepliesTypes = NotNullableTypes<RepliesState>

const initialState: RepliesState = {
  creatingFor: null,
  creating: false,
  creatingError: null,
}

const name = 'replies'

const repliesSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCreatingFor: setCreatingForReducer,
    create: createReducer,
    createSuccess: createSuccessReducer,
    createFailure: createFailureReducer,
    delete: deleteReducer,
  },
})

export default repliesSlice
export const RepliesActions = repliesSlice.actions
