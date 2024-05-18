import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState, ApplicationsTypes } from '@/lib/applications/applicationsSlice'

export function updateFailureReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ error: ApplicationsTypes['updatingError'] }>
) {
  state.updating = false
  state.updatingError = action.payload.error
}
