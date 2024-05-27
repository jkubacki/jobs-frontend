import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { listingFactory } from '@/utils/factories/listing'
import { createSuccessReducer } from '@/lib/listings/actions/createSuccess/createSuccessReducer'

describe('createSuccessReducer', () => {
  it('adds application to its listing applications in store', () => {
    const initialState: ListingsState = {
      listings: listingFactory.buildList(1),
      creating: true,
      creatingError: 'error',
    } as ListingsState

    const newListing = listingFactory.build()

    const nextState = createNextState(initialState, draftState => {
      createSuccessReducer(draftState, {
        payload: { listing: newListing },
        type: 'listings/createSuccessAction',
      })
    })

    expect(nextState.creating).toBe(false)
    expect(nextState.creatingError).toBe(null)
    expect(nextState.listings).toEqual([newListing, ...initialState.listings])
  })
})
