import { runSaga } from 'redux-saga'

import { ListingsActions } from '@/lib/listings/listingsSlice'
import { setQuerySaga } from '@/lib/listings/actions/setQuery/setQuerySaga'

type Action = ReturnType<typeof ListingsActions.load>

describe('setQuerySaga', () => {
  it('dispatches ListingActions.load', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }
    await runSaga(store, setQuerySaga, ListingsActions.setQuery({ query: 'query' }))

    expect(dispatched).toEqual([ListingsActions.load({ page: 1 })])
  })
})
