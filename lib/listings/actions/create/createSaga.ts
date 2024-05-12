import { call, put } from 'typed-redux-saga'
import { toast } from 'sonner'

import { ApiErrorResponse } from '@/utils/api'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { CreateApiSuccess, createApi } from '@/lib/listings/actions/create/createApi'

export function* createSaga(action: ReturnType<typeof ListingsActions.create>) {
  const response = yield* call(createApi, action)

  if (response.success) {
    yield* call(success, response)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: CreateApiSuccess) {
  const { data: listing } = response
  yield* put(ListingsActions.createSuccess({ listing }))
  yield* put(ListingsActions.setCreatingFormOpen({ creatingFormOpen: false }))
  toast('Listing has been created', {
    description: 'You can now create applications for it.',
    action: {
      label: 'close',
      onClick: () => {},
    },
  })
}

function* failure({ error }: ApiErrorResponse) {
  yield* put(ListingsActions.createFailure({ error }))
}
