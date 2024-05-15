import { put } from 'typed-redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'

export function* setRemoteFilterSaga(_action: ReturnType<typeof ListingsActions.setRemoteFilter>) {
  yield* put(ListingsActions.load({ page: 1 }))
}
