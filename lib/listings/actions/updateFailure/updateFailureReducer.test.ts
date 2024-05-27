import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { updateFailureReducer } from '@/lib/listings/actions/updateFailure/updateFailureReducer'

describe('updateFailureReducer', () => {
  it('sets updating to false and updatingError to error from the payload', () => {
    const initialState: ListingsState = {
      updating: true,
      updatingError: null,
    } as ListingsState

    const nextState = createNextState(initialState, draftState => {
      updateFailureReducer(draftState, {
        payload: { error: 'error' },
        type: 'action',
      })
    })

    expect(nextState.updating).toBe(false)
    expect(nextState.updatingError).toBe('error')
  })
})
