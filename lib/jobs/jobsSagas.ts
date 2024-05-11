import { all, takeLatest } from 'typed-redux-saga'

import { JobsActions } from '@/lib/jobs/jobsSlice'
import { loadSaga } from '@/lib/jobs/actions/load/loadSaga'

export function* jobsSagas() {
  yield* all([takeLatest(JobsActions.load, loadSaga)])
}
