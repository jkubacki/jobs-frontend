import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { setQueryReducer } from '@/lib/listings/actions/setQuery/setQueryReducer'

describe('setQueryReducer', () => {
  it('sets query in listings state', () => {
    const initialState: ListingsState = { query: '' } as ListingsState

    const query: ListingsState['query'] = 'google'

    const nextState = createNextState(initialState, draftState => {
      setQueryReducer(draftState, {
        payload: { query },
        type: 'listings/setQueryAction',
      })
    })

    expect(nextState.query).toEqual(query)
  })
})
