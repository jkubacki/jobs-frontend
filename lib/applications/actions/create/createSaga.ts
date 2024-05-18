import { call, put } from 'typed-redux-saga'
import { toast } from 'sonner'

import { ApiErrorResponse } from '@/utils/api'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { CreateApiSuccess, createApi } from '@/lib/applications/actions/create/createApi'
import { ListingsActions } from '@/lib/listings/listingsSlice'

export function* createSaga(action: ReturnType<typeof ApplicationsActions.create>) {
  const response = yield* call(createApi, action)

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: CreateApiSuccess) {
  const { data: application } = response
  yield* put(ApplicationsActions.createSuccess())
  yield* put(ListingsActions.addApplication({ application }))

  toast.success('Application has been created')
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(ApplicationsActions.createFailure({ error }))
}
