import { put } from 'typed-redux-saga'

import { ApplicationsActions } from '@/lib/applications/applicationsSlice'

export function* setQuerySaga(action: ReturnType<typeof ApplicationsActions.setQuery>) {
  yield* put(ApplicationsActions.load({ page: 1 }))
}
