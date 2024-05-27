import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { createFailureReducer } from '@/lib/listings/actions/createFailure/createFailureReducer'

describe('createFailureReducer', () => {
  it('adds application to its listing applications in store', () => {
    const initialState: ListingsState = {
      creating: true,
      creatingError: null,
    } as ListingsState

    const nextState = createNextState(initialState, draftState => {
      createFailureReducer(draftState, {
        payload: { error: 'error' },
        type: 'listings/createFailureAction',
      })
    })

    expect(nextState.creating).toBe(false)
    expect(nextState.creatingError).toBe('error')
  })
})
