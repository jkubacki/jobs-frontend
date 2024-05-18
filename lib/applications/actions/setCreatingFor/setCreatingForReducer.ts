import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { Listing } from '@/lib/listings/types/Listing'

export function setCreatingForReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ listing: Listing }>
) {
  const { listing } = action.payload

  state.creatingFor = listing
}
