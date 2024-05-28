import { createNextState } from '@reduxjs/toolkit'

import listingsSlice from '@/lib/listings/listingsSlice'
import { deleteReducer } from '@/lib/listings/actions/delete/deleteReducer'
import { listingFactory } from '@/utils/factories/listing'

describe('deleteReducer', () => {
  it("doesn't change the store", () => {
    const initialState = listingsSlice.getInitialState()

    const listing = listingFactory.build()

    const nextState = createNextState(initialState, draftState => {
      deleteReducer(draftState, {
        payload: { listing },
        type: 'action',
      })
    })

    expect(nextState).toEqual(initialState)
  })
})
