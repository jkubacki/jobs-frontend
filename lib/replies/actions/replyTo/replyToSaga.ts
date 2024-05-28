import { call } from 'typed-redux-saga'
import { toast } from 'sonner'

import { ApiErrorResponse } from '@/utils/api'
import { RepliesActions } from '@/lib/replies/repliesSlice'
import { ReplyToApiSuccess, replyToApi } from '@/lib/replies/actions/replyTo/replyToApi'

export function* replyToSaga(action: ReturnType<typeof RepliesActions.replyTo>) {
  const response = yield* call(replyToApi, action)

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: ReplyToApiSuccess) {
  const { data: reply } = response
  // yield* put(RepliesActions.replyToSuccess())
  // yield* put(ApplicationsActions.addReply({ reply }))

  toast.success('Replied')
}

function* failure({ error }: ApiErrorResponse) {
  // yield* put(RepliesActions.replyToFailure({ error }))
  toast.warning('Not replied ' + error)
}
