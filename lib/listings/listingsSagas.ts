import { all, takeLatest } from 'typed-redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'
import { loadSaga } from '@/lib/listings/actions/load/loadSaga'
import { createSaga } from '@/lib/listings/actions/create/createSaga'

export function* listingsSagas() {
  yield* all([
    takeLatest(ListingsActions.load, loadSaga),
    takeLatest(ListingsActions.create, createSaga),
  ])
}
