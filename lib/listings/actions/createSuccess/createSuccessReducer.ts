import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function createSuccessReducer(state: Draft<ListingsState>, action: PayloadAction) {}
