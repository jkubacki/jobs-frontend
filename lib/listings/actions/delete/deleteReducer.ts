import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'

export function deleteReducer(
  state: Draft<ListingsState>,
  _action: PayloadAction<{ listing: Listing }>
) {}
