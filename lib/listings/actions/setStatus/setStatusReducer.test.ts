import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { setStatusReducer } from '@/lib/listings/actions/setStatus/setStatusReducer'

describe('setStatusReducer', () => {
  it('sets show rejected in listings state', () => {
    const initialState: ListingsState = { status: null } as ListingsState

    const status: ListingsState['status'] = 'active'

    const nextState = createNextState(initialState, draftState => {
      setStatusReducer(draftState, {
        payload: { status },
        type: 'action',
      })
    })

    expect(nextState.status).toEqual(status)
  })
})
