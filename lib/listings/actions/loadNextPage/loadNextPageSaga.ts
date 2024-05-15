import { put, select } from 'typed-redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'

export function* loadNextPageSaga(_action: ReturnType<typeof ListingsActions.loadNextPage>) {
  const { page } = yield* select(state => ListingsSelectors.metadata(state))

  yield* put(ListingsActions.load({ page: page + 1 }))
}
