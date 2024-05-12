import { AppState } from '@/lib/store'

export const ListingsSelectors = {
  loading: (state: AppState) => state.listings.loading,
  error: (state: AppState) => state.listings.error,
  listings: (state: AppState) => state.listings.listings,
}
