import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { listingFactory } from '@/utils/factories/listing'
import { deleteSuccessReducer } from '@/lib/listings/actions/deleteSuccess/deleteSuccessReducer'

describe('deleteSuccessReducer', () => {
  it('removes listing from the store', () => {
    const initialState: ListingsState = {
      listings: listingFactory.buildList(3),
    } as ListingsState

    const deletedListing = initialState.listings[1]

    const nextState = createNextState(initialState, draftState => {
      deleteSuccessReducer(draftState, {
        payload: { listing: deletedListing },
        type: 'listings/deleteSuccessAction',
      })
    })

    expect(nextState.listings).toEqual([initialState.listings[0], initialState.listings[2]])
  })
})
