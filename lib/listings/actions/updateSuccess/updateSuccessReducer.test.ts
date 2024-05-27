import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { listingFactory } from '@/utils/factories/listing'
import { updateSuccessReducer } from '@/lib/listings/actions/updateSuccess/updateSuccessReducer'

describe('updateSuccessReducer', () => {
  it('sets updating to false, updatingError to null and replaces updated listing', () => {
    const notUpdatedListing = listingFactory.build()
    const listingToUpdate = listingFactory.build()

    const initialState: ListingsState = {
      listings: [notUpdatedListing, listingToUpdate],
      updating: true,
      updatingError: 'error',
    } as ListingsState

    listingToUpdate.title = 'new title'

    const nextState = createNextState(initialState, draftState => {
      updateSuccessReducer(draftState, {
        payload: { listing: listingToUpdate },
        type: 'action',
      })
    })

    expect(nextState.updating).toBe(false)
    expect(nextState.updatingError).toBe(null)

    const updatedListing = nextState.listings.find(l => l.id === listingToUpdate.id)
    expect(nextState.listings).toEqual([notUpdatedListing, updatedListing])
  })
})
