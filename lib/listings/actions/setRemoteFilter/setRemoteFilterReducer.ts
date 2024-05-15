import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function setRemoteFilterReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ remoteFilter: ListingsState['remoteFilter'] }>
) {
  const { remoteFilter } = action.payload

  state.remoteFilter = remoteFilter
}
