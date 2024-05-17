import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'

export function loadReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ page: number }>
) {
  const { page } = action.payload

  if (page === 1) {
    state.applications = []
  }

  state.loading = true
}
