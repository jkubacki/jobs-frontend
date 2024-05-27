import { runSaga } from 'redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'
import { setRemoteFilterSaga } from '@/lib/listings/actions/setRemoteFilter/setRemoteFilterSaga'

type Action = ReturnType<typeof ListingsActions.load>

describe('setRemoteFilterSaga', () => {
  it('dispatches ListingActions.load', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }
    await runSaga(
      store,
      setRemoteFilterSaga,
      ListingsActions.setRemoteFilter({ remoteFilter: true })
    )

    expect(dispatched).toEqual([ListingsActions.load({ page: 1 })])
  })
})
