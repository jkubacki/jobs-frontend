import { call, put } from 'typed-redux-saga'

import { ApiErrorResponse } from '@/utils/api'
import { LoadApiSuccess, loadApi } from '@/lib/listings/actions/load/loadApi'
import { ListingsActions } from '@/lib/listings/listingsSlice'

export function* loadSaga(_action: ReturnType<typeof ListingsActions.load>) {
  const response = yield* call(loadApi)

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: LoadApiSuccess) {
  const { data: listings } = response
  yield* put(ListingsActions.loadSuccess({ listings }))
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(ListingsActions.loadFailure({ error }))
}
