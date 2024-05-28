import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { setShowRejectedReducer } from '@/lib/listings/actions/setShowRejected/setShowRejectedReducer'

describe('setShowRejectedReducer', () => {
  it('sets show rejected in listings state', () => {
    const initialState: ListingsState = { showRejected: false } as ListingsState

    const showRejected: ListingsState['showRejected'] = true

    const nextState = createNextState(initialState, draftState => {
      setShowRejectedReducer(draftState, {
        payload: { showRejected },
        type: 'action',
      })
    })

    expect(nextState.showRejected).toEqual(showRejected)
  })
})
