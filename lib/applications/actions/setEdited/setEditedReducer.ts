import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'

export function setEditedReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ application: ApplicationsState['edited'] }>
) {
  const { application } = action.payload

  state.edited = application
}
