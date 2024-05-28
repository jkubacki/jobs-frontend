import { all, takeLatest } from 'typed-redux-saga'

import { RepliesActions } from '@/lib/replies/repliesSlice'
import { replyToSaga } from '@/lib/replies/actions/replyTo/replyToSaga'

export function* repliesSagas() {
  yield* all([takeLatest(RepliesActions.replyTo, replyToSaga)])
}
