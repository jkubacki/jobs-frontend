import { call, put } from 'typed-redux-saga'
import { toast } from 'sonner'

import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { deleteApi } from '@/lib/listings/actions/delete/deleteApi'
import { Listing } from '@/lib/listings/types/Listing'

export function* deleteSaga(action: ReturnType<typeof ListingsActions.delete>) {
  const { listing } = action.payload

  const response = yield* call(deleteApi, action)

  if (response.success) {
    yield* call(success, response, listing)
  } else {
    yield* call(failure, response)
  }
}

function* success(response: ApiResponse, listing: Listing) {
  yield* put(ListingsActions.deleteSuccess({ listing }))
  toast('Listing has been deleted', {
    description: 'With it, all applications have been deleted as well.',
    action: {
      label: 'close',
      onClick: () => {},
    },
  })
}

function* failure({ error }: ApiErrorResponse) {
  toast(error)
}
