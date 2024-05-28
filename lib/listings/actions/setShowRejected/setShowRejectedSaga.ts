import { put } from 'typed-redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'

export function* setShowRejectedSaga(_action: ReturnType<typeof ListingsActions.setShowRejected>) {
  yield* put(ListingsActions.load({ page: 1 }))
}
