import { AppState } from '@/lib/store'

export const ApplicationsSelectors = {
  creatingFor: (state: AppState) => state.applications.creatingFor,
  creating: (state: AppState) => state.applications.creating,
  creatingError: (state: AppState) => state.applications.creatingError,
  updating: (state: AppState) => state.applications.updating,
  updatingError: (state: AppState) => state.applications.updatingError,
  edited: (state: AppState) => state.applications.edited,
  updatingFormOpen: (state: AppState) => !!state.applications.edited,
}
