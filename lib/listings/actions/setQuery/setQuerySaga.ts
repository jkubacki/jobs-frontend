import { put } from 'typed-redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'

export function* setQuerySaga(action: ReturnType<typeof ListingsActions.setQuery>) {
  yield* put(ListingsActions.load({ page: 1 }))
}
