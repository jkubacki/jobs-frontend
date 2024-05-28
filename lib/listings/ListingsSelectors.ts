import { remoteFilterNameSelector } from '@/lib/listings/selectors/remoteFilterNameSelector'
import { AppState } from '@/lib/store'

export const ListingsSelectors = {
  loading: (state: AppState) => state.listings.loading,
  loadingError: (state: AppState) => state.listings.loadingError,
  listings: (state: AppState) => state.listings.listings,
  moreListingsAvailable: (state: AppState) =>
    state.listings.listings.length < state.listings.metadata.total,
  metadata: (state: AppState) => state.listings.metadata,
  creatingFormOpen: (state: AppState) => state.listings.creatingFormOpen,
  creating: (state: AppState) => state.listings.creating,
  creatingError: (state: AppState) => state.listings.creatingError,
  updating: (state: AppState) => state.listings.updating,
  updatingError: (state: AppState) => state.listings.updatingError,
  edited: (state: AppState) => state.listings.edited,
  updatingFormOpen: (state: AppState) => !!state.listings.edited,
  query: (state: AppState) => state.listings.query,
  remoteFilter: (state: AppState) => state.listings.remoteFilter,
  remoteFilterName: (state: AppState) => remoteFilterNameSelector(state),
  showRejected: (state: AppState) => state.listings.showRejected,
}
