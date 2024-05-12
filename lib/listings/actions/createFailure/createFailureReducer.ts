import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState, ListingsTypes } from '@/lib/listings/listingsSlice'

export function createFailureReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ error: ListingsTypes['error'] }>
) {}
