import { call, put } from 'typed-redux-saga'

import { ApiErrorResponse } from '@/utils/api'
import { LoadApiSuccess, loadApi } from '@/lib/listings/actions/load/loadApi'
import { ListingsActions } from '@/lib/listings/listingsSlice'

export function* loadSaga(action: ReturnType<typeof ListingsActions.load>) {
  const { page, query } = action.payload

  const response = yield* call(loadApi, { page, query })

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: LoadApiSuccess) {
  const { listings, metadata } = response.data
  yield* put(ListingsActions.loadSuccess({ listings, metadata }))
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(ListingsActions.loadFailure({ error }))
}
