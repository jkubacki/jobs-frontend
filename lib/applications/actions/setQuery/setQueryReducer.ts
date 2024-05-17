import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'

export function setQueryReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ query: string }>
) {
  const { query } = action.payload

  state.query = query
}
