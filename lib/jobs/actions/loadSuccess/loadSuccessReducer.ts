import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { JobsState } from '@/lib/jobs/jobsSlice'
import { Job } from '@/lib/jobs/types/Job'

export function loadSuccessReducer(
  state: Draft<JobsState>,
  action: PayloadAction<{ jobs: Job[] }>
) {
  const { jobs } = action.payload

  state.loading = false
  state.error = null
  state.jobs = jobs
}
