import { call, put } from 'typed-redux-saga'
import { toast } from 'sonner'

import { ApiErrorResponse } from '@/utils/api'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { UpdateApiSuccess, updateApi } from '@/lib/listings/actions/update/updateApi'

export function* updateSaga(action: ReturnType<typeof ListingsActions.update>) {
  const response = yield* call(updateApi, action)

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: UpdateApiSuccess) {
  const { data: listing } = response
  yield* put(ListingsActions.updateSuccess({ listing }))
  yield* put(ListingsActions.setEdited({ listing: null }))
  toast.success('Listing has been updated')
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(ListingsActions.updateFailure({ error }))
}
