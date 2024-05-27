import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { applicationFactory } from '@/utils/factories/application'
import { setApplicationReducer } from '@/lib/listings/actions/setApplication/setApplicationReducer'
import { listingFactory } from '@/utils/factories/listing'

describe('setApplicationReducer', () => {
  it('replaces application in listing applications in store', () => {
    const applicationNotToReplace = applicationFactory.build()
    const applicationToReplace = applicationFactory.build()
    const listingBefore = listingFactory.build({
      applications: [applicationNotToReplace, applicationToReplace],
    })

    const initialState: ListingsState = {
      listings: [listingFactory.build(), listingBefore],
    } as ListingsState

    const replaceWith = applicationFactory.build({ id: applicationToReplace.id })
    const nextState = createNextState(initialState, draftState => {
      setApplicationReducer(draftState, {
        payload: { application: replaceWith },
        type: 'action',
      })
    })

    const listingAfter = nextState.listings.find(l => l.id === listingBefore.id)

    expect(listingAfter?.applications).toEqual([applicationNotToReplace, replaceWith])
  })
})
