import { AppState } from '@/lib/store'

export const ListingsSelectors = {
  loading: (state: AppState) => state.listings.loading,
  loadingError: (state: AppState) => state.listings.loadingError,
  listings: (state: AppState) => state.listings.listings,
  creatingFormOpen: (state: AppState) => state.listings.creatingFormOpen,
  creating: (state: AppState) => state.listings.creating,
  creatingError: (state: AppState) => state.listings.creatingError,
}
