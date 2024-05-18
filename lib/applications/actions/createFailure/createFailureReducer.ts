import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState, ApplicationsTypes } from '@/lib/applications/applicationsSlice'

export function createFailureReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ error: ApplicationsTypes['creatingError'] }>
) {
  state.creating = false
  state.creatingError = action.payload.error
}
