import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState, ApplicationsTypes } from '@/lib/applications/applicationsSlice'

export function loadFailureReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ error: ApplicationsTypes['loadingError'] }>
) {
  state.loading = false
  state.loadingError = action.payload.error
  state.applications = []
}
