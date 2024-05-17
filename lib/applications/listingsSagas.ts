import { all, takeLatest } from 'typed-redux-saga'

import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { loadSaga } from '@/lib/applications/actions/load/loadSaga'
import { createSaga } from '@/lib/applications/actions/create/createSaga'
import { loadNextPageSaga } from '@/lib/applications/actions/loadNextPage/loadNextPageSaga'
import { setQuerySaga } from '@/lib/applications/actions/setQuery/setQuerySaga'
import { setRemoteFilterSaga } from '@/lib/applications/actions/setRemoteFilter/setRemoteFilterSaga'
import { deleteSaga } from '@/lib/applications/actions/delete/deleteSaga'
import { updateSaga } from '@/lib/applications/actions/update/updateSaga'

export function* applicationsSagas() {
  yield* all([
    takeLatest(ApplicationsActions.load, loadSaga),
    takeLatest(ApplicationsActions.loadNextPage, loadNextPageSaga),
    takeLatest(ApplicationsActions.create, createSaga),
    takeLatest(ApplicationsActions.update, updateSaga),
    takeLatest(ApplicationsActions.delete, deleteSaga),
    takeLatest(ApplicationsActions.setQuery, setQuerySaga),
    takeLatest(ApplicationsActions.setRemoteFilter, setRemoteFilterSaga),
  ])
}
