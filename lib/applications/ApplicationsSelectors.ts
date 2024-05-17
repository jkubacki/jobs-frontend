import { AppState } from '@/lib/store'

export const ApplicationsSelectors = {
  loading: (state: AppState) => state.applications.loading,
  loadingError: (state: AppState) => state.applications.loadingError,
  applications: (state: AppState) => state.applications.applications,
  moreApplicationsAvailable: (state: AppState) =>
    state.applications.applications.length < state.applications.metadata.total,
  metadata: (state: AppState) => state.applications.metadata,
  creatingFormOpen: (state: AppState) => state.applications.creatingFormOpen,
  creating: (state: AppState) => state.applications.creating,
  creatingError: (state: AppState) => state.applications.creatingError,
  updating: (state: AppState) => state.applications.updating,
  updatingError: (state: AppState) => state.applications.updatingError,
  edited: (state: AppState) => state.applications.edited,
  updatingFormOpen: (state: AppState) => !!state.applications.edited,
  query: (state: AppState) => state.applications.query,
  remoteFilter: (state: AppState) => state.applications.remoteFilter,
  remoteFilterName: (state: AppState) =>
    state.applications.remoteFilter === null
      ? null
      : state.applications.remoteFilter
        ? 'remote'
        : 'on site',
}
