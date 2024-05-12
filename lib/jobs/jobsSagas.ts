import { all, takeLatest } from 'typed-redux-saga'

import { JobsActions } from '@/lib/jobs/jobsSlice'
import { loadSaga } from '@/lib/jobs/actions/load/loadSaga'
import { createSaga } from '@/lib/jobs/actions/create/createSaga'

export function* jobsSagas() {
  yield* all([takeLatest(JobsActions.load, loadSaga), takeLatest(JobsActions.create, createSaga)])
}
