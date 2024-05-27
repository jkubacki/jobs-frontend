import { AppState } from '@/lib/store'

const remoteFilterNameSelector = (state: AppState) =>
  state.listings.remoteFilter === null ? null : state.listings.remoteFilter ? 'remote' : 'on site'

export { remoteFilterNameSelector }
