import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'

export function createSuccessReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ application: Application }>
) {
  const { application } = action.payload

  state.creating = false
  state.creatingError = null
  state.applications = [application, ...state.applications]
}
