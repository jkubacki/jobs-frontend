import { all } from 'redux-saga/effects'

import { listingsSagas } from '@/lib/listings/listingsSagas'

export default function* rootSaga() {
  yield all([listingsSagas()])
}
