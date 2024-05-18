import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'

export function setCreatingForReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ listing: ApplicationsState['creatingFor'] }>
) {
  const { listing } = action.payload

  state.creatingFor = listing
}
