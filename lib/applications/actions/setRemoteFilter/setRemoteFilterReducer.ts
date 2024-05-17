import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'

export function setRemoteFilterReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ remoteFilter: ApplicationsState['remoteFilter'] }>
) {
  const { remoteFilter } = action.payload

  state.remoteFilter = remoteFilter
}
