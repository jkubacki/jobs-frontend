import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { JobsState, JobsTypes } from '@/lib/jobs/jobsSlice'

export function loadFailureReducer(
  state: Draft<JobsState>,
  action: PayloadAction<{ error: JobsTypes['error'] }>
) {
  state.loading = false
  state.error = action.payload.error
  state.jobs = []
}
