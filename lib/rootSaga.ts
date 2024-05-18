import { all } from 'redux-saga/effects'

import { listingsSagas } from '@/lib/listings/listingsSagas'
import { applicationsSagas } from '@/lib/applications/applicationsSagas'

export default function* rootSaga() {
  yield all([listingsSagas(), applicationsSagas()])
}
