import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'

export function deleteSuccessReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ application: Application }>
) {
  state.applications = state.applications.filter(application => application.id !== action.payload.application.id)
}
