import { createSlice } from '@reduxjs/toolkit'

import { NotNullableTypes } from '@/utils/types/NotNullableTypes'
import { Listing } from '@/lib/listings/types/Listing'
import { loadReducer } from '@/lib/listings/actions/load/loadReducer'
import { loadFailureReducer } from '@/lib/listings/actions/loadFailure/loadFailureReducer'
import { loadSuccessReducer } from '@/lib/listings/actions/loadSuccess/loadSuccessReducer'
import { createReducer } from '@/lib/listings/actions/create/createReducer'
import { createSuccessReducer } from '@/lib/listings/actions/createSuccess/createSuccessReducer'
import { createFailureReducer } from '@/lib/listings/actions/createFailure/createFailureReducer'
import { setCreatingFormOpenReducer } from '@/lib/listings/actions/setCreatingFormOpen/setCreatingFormOpenReducer'
import { ListingsMetadata } from '@/lib/listings/actions/load/loadApi'
import { loadNextPageReducer } from '@/lib/listings/actions/loadNextPage/loadNextPageReducer'
import { setQueryReducer } from '@/lib/listings/actions/setQuery/setQueryReducer'
import { setRemoteFilterReducer } from '@/lib/listings/actions/setRemoteFilter/setRemoteFilterReducer'
import { deleteReducer } from '@/lib/listings/actions/delete/deleteReducer'
import { deleteSuccessReducer } from '@/lib/listings/actions/deleteSuccess/deleteSuccessReducer'
import { updateReducer } from '@/lib/listings/actions/update/updateReducer'
import { updateFailureReducer } from '@/lib/listings/actions/updateFailure/updateFailureReducer'
import { updateSuccessReducer } from '@/lib/listings/actions/updateSuccess/updateSuccessReducer'
import { setEditedReducer } from '@/lib/listings/actions/setEdited/setEditedReducer'
import { addApplicationReducer } from '@/lib/listings/actions/addApplication/addApplicationReducer'
import { removeApplicationReducer } from '@/lib/listings/actions/removeApplication/removeApplicationReducer'
import { setApplicationReducer } from '@/lib/listings/actions/setApplication/setApplicationReducer'
import { addReplyReducer } from '@/lib/listings/actions/addReply/addReplyReducer'
import { removeReplyReducer } from '@/lib/listings/actions/removeReply/removeReplyReducer'
import { setShowRejectedReducer } from '@/lib/listings/actions/setShowRejected/setShowRejectedReducer'

export interface ListingsState {
  listings: Listing[]
  metadata: ListingsMetadata
  loading: boolean
  loadingError: string | null
  creatingFormOpen: boolean
  creating: boolean
  creatingError: string | null
  edited: Listing | null
  updating: boolean
  updatingError: string | null
  query: string
  remoteFilter: boolean | null
  showRejected: boolean
}
export type ListingsTypes = NotNullableTypes<ListingsState>

const initialState: ListingsState = {
  listings: [],
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
  showRejected: true,
}

const name = 'listings'

const listingsSlice = createSlice({
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
    removeApplication: removeApplicationReducer,
    removeReply: removeReplyReducer,
    setApplication: setApplicationReducer,
    addApplication: addApplicationReducer,
    addReply: addReplyReducer,
    setShowRejected: setShowRejectedReducer,
  },
})

export default listingsSlice
export const ListingsActions = listingsSlice.actions
