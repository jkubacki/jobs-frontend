import { Draft } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'

export function createSuccessReducer(state: Draft<ApplicationsState>) {
  state.creating = false
  state.creatingError = null
  state.creatingFor = null
}
