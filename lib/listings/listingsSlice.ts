import { createSlice } from '@reduxjs/toolkit'

import { NotNullableTypes } from '@/utils/types/NotNullableTypes'
import { Listing } from '@/lib/listings/types/Listing'
import { loadReducer } from '@/lib/listings/actions/load/loadReducer'
import { loadFailureReducer } from '@/lib/listings/actions/loadFailure/loadFailureReducer'
import { loadSuccessReducer } from '@/lib/listings/actions/loadSuccess/loadSuccessReducer'
import { createReducer } from '@/lib/listings/actions/create/createReducer'
import { createSuccessReducer } from '@/lib/listings/actions/createSuccess/createSuccessReducer'
import { createFailureReducer } from '@/lib/listings/actions/createFailure/createFailureReducer'

export interface ListingsState {
  listings: Listing[]
  loading: boolean
  error: string | null
}
export type ListingsTypes = NotNullableTypes<ListingsState>

const initialState: ListingsState = {
  listings: [],
  loading: false,
  error: null,
}

const name = 'listings'

const listingsSlice = createSlice({
  name,
  initialState,
  reducers: {
    load: loadReducer,
    loadSuccess: loadSuccessReducer,
    loadFailure: loadFailureReducer,
    create: createReducer,
    createSuccess: createSuccessReducer,
    createFailure: createFailureReducer,
  },
})

export default listingsSlice
export const ListingsActions = listingsSlice.actions
