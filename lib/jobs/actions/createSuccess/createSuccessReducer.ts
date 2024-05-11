import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { JobsState } from '@/lib/jobs/jobsSlice'

export function createSuccessReducer(state: Draft<JobsState>, action: PayloadAction) {}
