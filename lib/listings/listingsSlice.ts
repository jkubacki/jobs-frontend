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

export interface ListingsState {
  listings: Listing[]
  loading: boolean
  loadingError: string | null
  creatingFormOpen: boolean
  creating: boolean
  creatingError: string | null
}
export type ListingsTypes = NotNullableTypes<ListingsState>

const initialState: ListingsState = {
  listings: [],
  loading: false,
  loadingError: null,
  creatingFormOpen: false,
  creating: false,
  creatingError: null,
}

const name = 'listings'

const listingsSlice = createSlice({
  name,
  initialState,
  reducers: {
    load: loadReducer,
    loadSuccess: loadSuccessReducer,
    loadFailure: loadFailureReducer,
    setCreatingFormOpen: setCreatingFormOpenReducer,
    create: createReducer,
    createSuccess: createSuccessReducer,
    createFailure: createFailureReducer,
  },
})

export default listingsSlice
export const ListingsActions = listingsSlice.actions
