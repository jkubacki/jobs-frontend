import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { applicationFactory } from '@/utils/factories/application'
import { addApplicationReducer } from '@/lib/listings/actions/addApplication/addApplicationReducer'
import { listingFactory } from '@/utils/factories/listing'

describe('addApplicationReducer', () => {
  it('adds application to its listing applications in store', () => {
    const initialState: ListingsState = {
      listings: [listingFactory.build(), listingFactory.build()],
    } as ListingsState

    const application = applicationFactory.build({ listing_id: 2 })

    const nextState = createNextState(initialState, draftState => {
      addApplicationReducer(draftState, {
        payload: { application },
        type: 'listings/setQueryAction',
      })
    })

    const listing = nextState.listings.find(l => l.id === application.listing_id)

    expect(listing?.applications).toEqual([application])
  })
})
