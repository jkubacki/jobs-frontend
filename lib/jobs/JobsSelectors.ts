import { AppState } from '@/lib/store'

export const JobsSelectors = {
  loading: (state: AppState) => state.jobs.loading,
  error: (state: AppState) => state.jobs.error,
  jobs: (state: AppState) => state.jobs.jobs,
}
