import { call, put } from 'typed-redux-saga'
import { toast } from 'sonner'

import { ApiErrorResponse } from '@/utils/api'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { UpdateApiSuccess, updateApi } from '@/lib/applications/actions/update/updateApi'

export function* updateSaga(action: ReturnType<typeof ApplicationsActions.update>) {
  const response = yield* call(updateApi, action)

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: UpdateApiSuccess) {
  const { data: application } = response
  yield* put(ApplicationsActions.updateSuccess({ application }))
  yield* put(ApplicationsActions.setEdited({ application: null }))
  toast.success('Application has been updated')
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(ApplicationsActions.updateFailure({ error }))
}
