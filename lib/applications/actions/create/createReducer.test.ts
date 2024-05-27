import { createNextState } from '@reduxjs/toolkit'

import { createReducer } from '@/lib/applications/actions/create/createReducer'
import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { listingFactory } from '@/utils/factories/listing'
import { ApplicationFormPayload } from '@/components/Applications/ApplicationForm/defaultValues'

describe('createReducer', () => {
  it('sets creating to true and creatingError to null', () => {
    const initialState: ApplicationsState = {
      creating: false,
      creatingError: 'error',
    } as ApplicationsState

    const listing = listingFactory.build()

    const nextState = createNextState(initialState, draftState => {
      createReducer(draftState, {
        payload: { data: {} as ApplicationFormPayload, listing },
        type: 'action',
      })
    })

    expect(nextState.creating).toBe(true)
    expect(nextState.creatingError).toBe(null)
  })
})
