import { createSlice } from '@reduxjs/toolkit'

import { NotNullableTypes } from '@/utils/types/NotNullableTypes'
import { Job } from '@/lib/jobs/types/Job'
import { loadReducer } from '@/lib/jobs/actions/load/loadReducer'
import { loadFailureReducer } from '@/lib/jobs/actions/loadFailure/loadFailureReducer'
import { loadSuccessReducer } from '@/lib/jobs/actions/loadSuccess/loadSuccessReducer'

export interface JobsState {
  jobs: Job[]
  loading: boolean
  error: string | null
}
export type JobsTypes = NotNullableTypes<JobsState>

const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
}

const name = 'jobs'

const jobsSlice = createSlice({
  name,
  initialState,
  reducers: {
    load: loadReducer,
    loadSuccess: loadSuccessReducer,
    loadFailure: loadFailureReducer,
  },
})

export default jobsSlice
export const JobsActions = jobsSlice.actions
