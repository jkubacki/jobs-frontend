import { call, put, select } from 'typed-redux-saga'

import { ApiErrorResponse } from '@/utils/api'
import { LoadApiSuccess, loadApi } from '@/lib/applications/actions/load/loadApi'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { ApplicationsSelectors } from '@/lib/applications/ApplicationsSelectors'

export function* loadSaga(action: ReturnType<typeof ApplicationsActions.load>) {
  const { page } = action.payload

  const query = yield* select(state => ApplicationsSelectors.query(state))
  const remoteFilter = yield* select(state => ApplicationsSelectors.remoteFilter(state))

  const response = yield* call(loadApi, { page, query, remoteFilter })

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: LoadApiSuccess) {
  const { applications, metadata } = response.data
  yield* put(ApplicationsActions.loadSuccess({ applications, metadata }))
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(ApplicationsActions.loadFailure({ error }))
}
