import { all, takeLatest } from 'typed-redux-saga'

import { createSaga } from '@/lib/replies/actions/create/createSaga'
import { RepliesActions } from '@/lib/replies/repliesSlice'

export function* repliesSagas() {
  yield* all([takeLatest(RepliesActions.create, createSaga)])
}
