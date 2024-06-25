import { put } from 'typed-redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'

export function* setStatusSaga(_action: ReturnType<typeof ListingsActions.setStatus>) {
  yield* put(ListingsActions.load({ page: 1 }))
}
