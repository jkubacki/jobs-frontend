import { createNextState } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { listingFactory } from '@/utils/factories/listing'
import { createSuccessReducer } from '@/lib/applications/actions/createSuccess/createSuccessReducer'

describe('createSuccessReducer', () => {
  it('sets creating to false, creatingError to null, creatingFor to null', () => {
    const initialState: ApplicationsState = {
      creatingFor: listingFactory.build(),
      creating: true,
      creatingError: 'error',
    } as ApplicationsState

    const nextState = createNextState(initialState, draftState => {
      createSuccessReducer(draftState)
    })

    expect(nextState.creating).toBe(false)
    expect(nextState.creatingError).toBe(null)
    expect(nextState.creatingFor).toEqual(null)
  })
})
