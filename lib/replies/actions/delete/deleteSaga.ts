import { call, put } from 'typed-redux-saga'
import { toast } from 'sonner'

import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { RepliesActions } from '@/lib/replies/repliesSlice'
import { deleteApi } from '@/lib/replies/actions/delete/deleteApi'
import { Reply } from '@/lib/replies/types/Reply'
import { ListingsActions } from '@/lib/listings/listingsSlice'

export function* deleteSaga(action: ReturnType<typeof RepliesActions.delete>) {
  const { reply } = action.payload

  const response = yield* call(deleteApi, action)

  if (response.success) {
    yield* call(success, response, reply)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: ApiResponse, reply: Reply) {
  yield* put(ListingsActions.removeReply({ reply }))

  toast.success('Reply has been deleted')
}

function* failure({ error }: ApiErrorResponse) {
  toast.warning(error)
}
