import { call, put } from 'typed-redux-saga'

import { ApiErrorResponse } from '@/utils/api'
import { LoadApiSuccess } from '@/lib/listings/actions/load/loadApi'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { createApi } from '@/lib/listings/actions/create/createApi'

export function* createSaga(action: ReturnType<typeof ListingsActions.create>) {
  const response = yield* call(createApi, action)

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: LoadApiSuccess) {
  const { data: jobs } = response
  yield* put(ListingsActions.createSuccess())
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(ListingsActions.createFailure({ error }))
}
