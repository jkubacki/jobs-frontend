import { all, takeLatest } from 'typed-redux-saga'

import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { createSaga } from '@/lib/applications/actions/create/createSaga'
import { deleteSaga } from '@/lib/applications/actions/delete/deleteSaga'
import { updateSaga } from '@/lib/applications/actions/update/updateSaga'

export function* applicationsSagas() {
  yield* all([
    takeLatest(ApplicationsActions.create, createSaga),
    takeLatest(ApplicationsActions.update, updateSaga),
    takeLatest(ApplicationsActions.delete, deleteSaga),
  ])
}
