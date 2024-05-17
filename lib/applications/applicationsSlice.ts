import { createSlice } from '@reduxjs/toolkit'

import { NotNullableTypes } from '@/utils/types/NotNullableTypes'
import { loadReducer } from '@/lib/applications/actions/load/loadReducer'
import { loadFailureReducer } from '@/lib/applications/actions/loadFailure/loadFailureReducer'
import { loadSuccessReducer } from '@/lib/applications/actions/loadSuccess/loadSuccessReducer'
import { createReducer } from '@/lib/applications/actions/create/createReducer'
import { createSuccessReducer } from '@/lib/applications/actions/createSuccess/createSuccessReducer'
import { createFailureReducer } from '@/lib/applications/actions/createFailure/createFailureReducer'
import { setCreatingFormOpenReducer } from '@/lib/applications/actions/setCreatingFormOpen/setCreatingFormOpenReducer'
import { ApplicationsMetadata } from '@/lib/applications/actions/load/loadApi'
import { loadNextPageReducer } from '@/lib/applications/actions/loadNextPage/loadNextPageReducer'
import { setQueryReducer } from '@/lib/applications/actions/setQuery/setQueryReducer'
import { setRemoteFilterReducer } from '@/lib/applications/actions/setRemoteFilter/setRemoteFilterReducer'
import { deleteReducer } from '@/lib/applications/actions/delete/deleteReducer'
import { deleteSuccessReducer } from '@/lib/applications/actions/deleteSuccess/deleteSuccessReducer'
import { updateReducer } from '@/lib/applications/actions/update/updateReducer'
import { updateFailureReducer } from '@/lib/applications/actions/updateFailure/updateFailureReducer'
import { updateSuccessReducer } from '@/lib/applications/actions/updateSuccess/updateSuccessReducer'
import { setEditedReducer } from '@/lib/applications/actions/setEdited/setEditedReducer'
import { Application } from '@/lib/applications/types/Application'

export interface ApplicationsState {
  applications: Application[]
  metadata: ApplicationsMetadata
  loading: boolean
  loadingError: string | null
  creatingFormOpen: boolean
  creating: boolean
  creatingError: string | null
  edited: Application | null
  updating: boolean
  updatingError: string | null
  query: string
  remoteFilter: boolean | null
}
export type ApplicationsTypes = NotNullableTypes<ApplicationsState>

const initialState: ApplicationsState = {
  applications: [],
  metadata: { total: 0, page: 0, from: 0, to: 0 },
  loading: false,
  loadingError: null,
  creatingFormOpen: false,
  creating: false,
  creatingError: null,
  edited: null,
  updating: false,
  updatingError: null,
  query: '',
  remoteFilter: null,
}

const name = 'applications'

const applicationsSlice = createSlice({
  name,
  initialState,
  reducers: {
    load: loadReducer,
    loadSuccess: loadSuccessReducer,
    loadFailure: loadFailureReducer,
    loadNextPage: loadNextPageReducer,
    setCreatingFormOpen: setCreatingFormOpenReducer,
    create: createReducer,
    createSuccess: createSuccessReducer,
    createFailure: createFailureReducer,
    update: updateReducer,
    updateSuccess: updateSuccessReducer,
    updateFailure: updateFailureReducer,
    setEdited: setEditedReducer,
    setQuery: setQueryReducer,
    setRemoteFilter: setRemoteFilterReducer,
    delete: deleteReducer,
    deleteSuccess: deleteSuccessReducer,
  },
})

export default applicationsSlice
export const ApplicationsActions = applicationsSlice.actions
