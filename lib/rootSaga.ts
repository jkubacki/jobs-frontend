import { all } from 'redux-saga/effects'

import { listingsSagas } from '@/lib/listings/listingsSagas'
import { applicationsSagas } from '@/lib/applications/listingsSagas'

export default function* rootSaga() {
  yield all([listingsSagas(), applicationsSagas()])
}
