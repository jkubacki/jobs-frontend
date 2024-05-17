import { put, select } from 'typed-redux-saga'

import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { ApplicationsSelectors } from '@/lib/applications/ApplicationsSelectors'

export function* loadNextPageSaga(_action: ReturnType<typeof ApplicationsActions.loadNextPage>) {
  const { page } = yield* select(state => ApplicationsSelectors.metadata(state))

  yield* put(ApplicationsActions.load({ page: page + 1 }))
}
