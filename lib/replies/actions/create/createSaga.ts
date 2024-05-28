import { call, put } from 'typed-redux-saga'
import { toast } from 'sonner'

import { ApiErrorResponse } from '@/utils/api'
import { RepliesActions } from '@/lib/replies/repliesSlice'
import { CreateApiSuccess, createApi } from '@/lib/replies/actions/create/createApi'

export function* createSaga(action: ReturnType<typeof RepliesActions.create>) {
  const response = yield* call(createApi, action)

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: CreateApiSuccess) {
  const { data: reply } = response
  yield* put(RepliesActions.createSuccess())
  // yield* put(ApplicationsActions.addReply({ reply }))

  toast.success('Replied')
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(RepliesActions.createFailure({ error }))
  toast.warning('Not replied ' + error)
}
