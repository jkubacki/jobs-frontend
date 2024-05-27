import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { setEditedReducer } from '@/lib/listings/actions/setEdited/setEditedReducer'
import { listingFactory } from '@/utils/factories/listing'

describe('setEditedReducer', () => {
  it('sets listing that is edited in listings store', () => {
    const initialState: ListingsState = { edited: null } as ListingsState

    const edited = listingFactory.build()

    const nextState = createNextState(initialState, draftState => {
      setEditedReducer(draftState, {
        payload: { listing: edited },
        type: 'action',
      })
    })

    expect(nextState.edited).toEqual(edited)
  })
})
