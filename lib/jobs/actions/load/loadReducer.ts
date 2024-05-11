import { Draft } from '@reduxjs/toolkit'

import { JobsState } from '@/lib/jobs/jobsSlice'

export function loadReducer(state: Draft<JobsState>) {
  state.loading = true
}
