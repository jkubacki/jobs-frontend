import { call, put } from 'typed-redux-saga'

import { ApiErrorResponse } from '@/utils/api'
import { LoadApiSuccess } from '@/lib/jobs/actions/load/loadApi'
import { JobsActions } from '@/lib/jobs/jobsSlice'
import { createApi } from '@/lib/jobs/actions/create/createApi'

export function* createSaga(action: ReturnType<typeof JobsActions.create>) {
  const response = yield* call(createApi, action)

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: LoadApiSuccess) {
  const { data: jobs } = response
  yield* put(JobsActions.createSuccess())
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(JobsActions.createFailure({ error }))
}
