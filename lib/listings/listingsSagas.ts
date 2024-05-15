import { all, takeLatest } from 'typed-redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'
import { loadSaga } from '@/lib/listings/actions/load/loadSaga'
import { createSaga } from '@/lib/listings/actions/create/createSaga'
import { loadNextPageSaga } from '@/lib/listings/actions/loadNextPage/loadNextPageSaga'

export function* listingsSagas() {
  yield* all([
    takeLatest(ListingsActions.load, loadSaga),
    takeLatest(ListingsActions.loadNextPage, loadNextPageSaga),
    takeLatest(ListingsActions.create, createSaga),
  ])
}
