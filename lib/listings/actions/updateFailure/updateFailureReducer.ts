import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState, ListingsTypes } from '@/lib/listings/listingsSlice'

export function updateFailureReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ error: ListingsTypes['updatingError'] }>
) {
  state.updating = false
  state.updatingError = action.payload.error
}
