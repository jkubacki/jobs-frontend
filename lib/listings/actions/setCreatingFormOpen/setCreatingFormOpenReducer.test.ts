import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { setCreatingFormOpenReducer } from '@/lib/listings/actions/setCreatingFormOpen/setCreatingFormOpenReducer'

describe('setCreatingFormOpenReducer', () => {
  it('sets creatingFormOpen in listings store', () => {
    const initialState: ListingsState = { creatingFormOpen: false } as ListingsState

    const nextState = createNextState(initialState, draftState => {
      setCreatingFormOpenReducer(draftState, {
        payload: { creatingFormOpen: true },
        type: 'action',
      })
    })

    expect(nextState.creatingFormOpen).toEqual(true)
  })
})
