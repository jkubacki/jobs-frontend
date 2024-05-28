import { all } from 'redux-saga/effects'

import { listingsSagas } from '@/lib/listings/listingsSagas'
import { applicationsSagas } from '@/lib/applications/applicationsSagas'
import { repliesSagas } from '@/lib/replies/repliesSagas'

export default function* rootSaga() {
  yield all([listingsSagas(), applicationsSagas(), repliesSagas()])
}
