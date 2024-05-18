import { createSlice } from '@reduxjs/toolkit'

import { NotNullableTypes } from '@/utils/types/NotNullableTypes'
import { Application } from '@/lib/applications/types/Application'
import { createReducer } from '@/lib/applications/actions/create/createReducer'
import { createSuccessReducer } from '@/lib/applications/actions/createSuccess/createSuccessReducer'
import { createFailureReducer } from '@/lib/applications/actions/createFailure/createFailureReducer'
import { setCreatingFormOpenReducer } from '@/lib/applications/actions/setCreatingFormOpen/setCreatingFormOpenReducer'
import { deleteReducer } from '@/lib/applications/actions/delete/deleteReducer'
import { deleteSuccessReducer } from '@/lib/applications/actions/deleteSuccess/deleteSuccessReducer'
import { updateReducer } from '@/lib/applications/actions/update/updateReducer'
import { updateFailureReducer } from '@/lib/applications/actions/updateFailure/updateFailureReducer'
import { updateSuccessReducer } from '@/lib/applications/actions/updateSuccess/updateSuccessReducer'
import { setEditedReducer } from '@/lib/applications/actions/setEdited/setEditedReducer'

export interface ApplicationsState {
  creatingFormOpen: boolean
  creating: boolean
  creatingError: string | null
  edited: Application | null
  updating: boolean
  updatingError: string | null
}
export type ApplicationsTypes = NotNullableTypes<ApplicationsState>

const initialState: ApplicationsState = {
  creatingFormOpen: false,
  creating: false,
  creatingError: null,
  edited: null,
  updating: false,
  updatingError: null,
}

const name = 'applications'

const applicationsSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCreatingFormOpen: setCreatingFormOpenReducer,
    create: createReducer,
    createSuccess: createSuccessReducer,
    createFailure: createFailureReducer,
    update: updateReducer,
    updateSuccess: updateSuccessReducer,
    updateFailure: updateFailureReducer,
    setEdited: setEditedReducer,
    delete: deleteReducer,
    deleteSuccess: deleteSuccessReducer,
  },
})

export default applicationsSlice
export const ApplicationsActions = applicationsSlice.actions
