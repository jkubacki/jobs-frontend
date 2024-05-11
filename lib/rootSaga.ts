import { all } from 'redux-saga/effects'

import { jobsSagas } from '@/lib/jobs/jobsSagas'

export default function* rootSaga() {
  yield all([jobsSagas()])
}
