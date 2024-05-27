import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { applicationFactory } from '@/utils/factories/application'
import { addApplicationReducer } from '@/lib/listings/actions/addApplication/addApplicationReducer'
import { listingFactory } from '@/utils/factories/listing'

describe('addApplicationReducer', () => {
  it('adds application to its listing applications in store', () => {
    const listingBefore = listingFactory.build()
    const initialState: ListingsState = {
      listings: [listingFactory.build(), listingBefore],
    } as ListingsState

    const application = applicationFactory.build({ listing_id: initialState.listings[1].id })

    const nextState = createNextState(initialState, draftState => {
      addApplicationReducer(draftState, {
        payload: { application },
        type: 'action',
      })
    })

    const listingAfter = nextState.listings.find(l => l.id === application.listing_id)

    expect(listingAfter?.applications).toEqual([application, ...listingBefore.applications])
  })
})
