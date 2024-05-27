import { createNextState } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { setCreatingForReducer } from '@/lib/applications/actions/setCreatingFor/setCreatingForReducer'
import { listingFactory } from '@/utils/factories/listing'

describe('setCreatingForReducer', () => {
  it('sets application that is creatingFor in applications store', () => {
    const initialState: ApplicationsState = { creatingFor: null } as ApplicationsState

    const creatingFor = listingFactory.build()

    const nextState = createNextState(initialState, draftState => {
      setCreatingForReducer(draftState, {
        payload: { listing: creatingFor },
        type: 'action',
      })
    })

    expect(nextState.creatingFor).toEqual(creatingFor)
  })
})
