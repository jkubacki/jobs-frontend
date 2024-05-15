import { call, put, select } from 'typed-redux-saga'

import { ApiErrorResponse } from '@/utils/api'
import { LoadApiSuccess, loadApi } from '@/lib/listings/actions/load/loadApi'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'

export function* loadSaga(action: ReturnType<typeof ListingsActions.load>) {
  const { page } = action.payload

  const query = yield* select(state => ListingsSelectors.query(state))
  const remoteFilter = yield* select(state => ListingsSelectors.remoteFilter(state))

  const response = yield* call(loadApi, { page, query, remoteFilter })

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
