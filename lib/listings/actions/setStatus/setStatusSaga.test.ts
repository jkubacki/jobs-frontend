import { runSaga } from 'redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'
import { setStatusSaga } from '@/lib/listings/actions/setStatus/setStatusSaga'

type Action = ReturnType<typeof ListingsActions.load>

describe('setStatusSaga', () => {
  it('dispatches ListingActions.load', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }
    await runSaga(store, setStatusSaga, ListingsActions.setStatus({ status: 'applied' }))

    expect(dispatched).toEqual([ListingsActions.load({ page: 1 })])
  })
})
