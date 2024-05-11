import { call, put } from 'typed-redux-saga'

import { ApiErrorResponse } from '@/utils/api'
import { LoadApiSuccess, loadApi } from '@/lib/jobs/actions/load/loadApi'
import { JobsActions } from '@/lib/jobs/jobsSlice'

export function* loadSaga(_action: ReturnType<typeof JobsActions.load>) {
  const response = yield* call(loadApi)

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: LoadApiSuccess) {
  const { data: jobs } = response
  yield* put(JobsActions.loadSuccess({ jobs }))
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(JobsActions.loadFailure({ error }))
}
