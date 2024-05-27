import { createNextState } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { updateSuccessReducer } from '@/lib/applications/actions/updateSuccess/updateSuccessReducer'

describe('updateSuccessReducer', () => {
  it('sets updating to false, updatingError to null', () => {
    const initialState: ApplicationsState = {
      updating: true,
      updatingError: 'error',
    } as ApplicationsState

    const nextState = createNextState(initialState, draftState => {
      updateSuccessReducer(draftState)
    })

    expect(nextState.updating).toBe(false)
    expect(nextState.updatingError).toBe(null)
  })
})
