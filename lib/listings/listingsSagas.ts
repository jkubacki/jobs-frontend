import { all, takeLatest } from 'typed-redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'
import { loadSaga } from '@/lib/listings/actions/load/loadSaga'
import { createSaga } from '@/lib/listings/actions/create/createSaga'
import { loadNextPageSaga } from '@/lib/listings/actions/loadNextPage/loadNextPageSaga'
import { setQuerySaga } from '@/lib/listings/actions/setQuery/setQuerySaga'
import { setRemoteFilterSaga } from '@/lib/listings/actions/setRemoteFilter/setRemoteFilterSaga'
import { deleteSaga } from '@/lib/listings/actions/delete/deleteSaga'
import { updateSaga } from '@/lib/listings/actions/update/updateSaga'
import { setShowRejectedSaga } from '@/lib/listings/actions/setShowRejected/setShowRejectedSaga'

export function* listingsSagas() {
  yield* all([
    takeLatest(ListingsActions.load, loadSaga),
    takeLatest(ListingsActions.loadNextPage, loadNextPageSaga),
    takeLatest(ListingsActions.create, createSaga),
    takeLatest(ListingsActions.update, updateSaga),
    takeLatest(ListingsActions.delete, deleteSaga),
    takeLatest(ListingsActions.setQuery, setQuerySaga),
    takeLatest(ListingsActions.setRemoteFilter, setRemoteFilterSaga),
    takeLatest(ListingsActions.setShowRejected, setShowRejectedSaga),
  ])
}
