import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { JobsState, JobsTypes } from '@/lib/jobs/jobsSlice'

export function createFailureReducer(
  state: Draft<JobsState>,
  action: PayloadAction<{ error: JobsTypes['error'] }>
) {}
