import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'

export function setCreatingFormOpenReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ creatingFormOpen: ApplicationsState['creatingFormOpen'] }>
) {
  const { creatingFormOpen } = action.payload

  state.creatingFormOpen = creatingFormOpen
}
