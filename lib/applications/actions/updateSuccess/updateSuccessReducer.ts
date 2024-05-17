import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'

export function updateSuccessReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ application: Application }>
) {
  const { application } = action.payload

  state.updating = false
  state.updatingError = null
  state.applications = state.applications.map(l => (l.id === application.id ? application : l))
}
