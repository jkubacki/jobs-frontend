import { call, put } from 'typed-redux-saga'
import { toast } from 'sonner'

import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { deleteApi } from '@/lib/applications/actions/delete/deleteApi'
import { Application } from '@/lib/applications/types/Application'

export function* deleteSaga(action: ReturnType<typeof ApplicationsActions.delete>) {
  const { application } = action.payload

  const response = yield* call(deleteApi, action)

  if (response.success) {
    yield* call(success, response, application)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: ApiResponse, application: Application) {
  yield* put(ApplicationsActions.deleteSuccess({ application }))
  toast.success('Application has been deleted', {
    description: 'With it, all applications have been deleted as well.',
  })
}

function* failure({ error }: ApiErrorResponse) {
  toast.warning(error)
}
