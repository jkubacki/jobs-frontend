import { put } from 'typed-redux-saga'

import { ApplicationsActions } from '@/lib/applications/applicationsSlice'

export function* setRemoteFilterSaga(
  _action: ReturnType<typeof ApplicationsActions.setRemoteFilter>
) {
  yield* put(ApplicationsActions.load({ page: 1 }))
}
