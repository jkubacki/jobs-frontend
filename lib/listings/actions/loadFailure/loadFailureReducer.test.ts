import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { loadFailureReducer } from '@/lib/listings/actions/loadFailure/loadFailureReducer'

describe('loadFailureReducer', () => {
  it('sets loading to false and loadingError to error from the payload', () => {
    const initialState: ListingsState = {
      loading: true,
      loadingError: null,
    } as ListingsState

    const nextState = createNextState(initialState, draftState => {
      loadFailureReducer(draftState, {
        payload: { error: 'error' },
        type: 'listings/loadFailureAction',
      })
    })

    expect(nextState.loading).toBe(false)
    expect(nextState.loadingError).toBe('error')
  })
})
