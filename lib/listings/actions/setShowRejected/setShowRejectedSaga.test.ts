import { runSaga } from 'redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'
import { setShowRejectedSaga } from '@/lib/listings/actions/setShowRejected/setShowRejectedSaga'

type Action = ReturnType<typeof ListingsActions.load>

describe('setShowRejectedSaga', () => {
  it('dispatches ListingActions.load', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }
    await runSaga(
      store,
      setShowRejectedSaga,
      ListingsActions.setShowRejected({ showRejected: true })
    )

    expect(dispatched).toEqual([ListingsActions.load({ page: 1 })])
  })
})
