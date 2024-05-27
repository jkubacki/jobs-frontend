import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { applicationFactory } from '@/utils/factories/application'
import { removeApplicationReducer } from '@/lib/listings/actions/removeApplication/removeApplicationReducer'
import { listingFactory } from '@/utils/factories/listing'

describe('removeApplicationReducer', () => {
  it('removes application from its listing applications in store', () => {
    const applicationNotToRemove = applicationFactory.build()
    const applicationToRemove = applicationFactory.build()
    const listingBefore = listingFactory.build({
      applications: [applicationNotToRemove, applicationToRemove],
    })

    const initialState: ListingsState = {
      listings: [listingFactory.build(), listingBefore],
    } as ListingsState

    const nextState = createNextState(initialState, draftState => {
      removeApplicationReducer(draftState, {
        payload: { application: applicationToRemove },
        type: 'action',
      })
    })

    const listingAfter = nextState.listings.find(l => l.id === listingBefore.id)

    expect(listingAfter?.applications).toEqual([applicationNotToRemove])
  })
})
