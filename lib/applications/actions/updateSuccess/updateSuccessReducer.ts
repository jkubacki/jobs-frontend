import { Draft } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'

export function updateSuccessReducer(state: Draft<ApplicationsState>) {
  state.updating = false
  state.updatingError = null
}
