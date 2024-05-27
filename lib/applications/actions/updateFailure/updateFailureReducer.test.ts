import { createNextState } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { updateFailureReducer } from '@/lib/applications/actions/updateFailure/updateFailureReducer'

describe('updateFailureReducer', () => {
  it('sets updating to false and updatingError to error from the payload', () => {
    const initialState: ApplicationsState = {
      updating: true,
      updatingError: null,
    } as ApplicationsState

    const nextState = createNextState(initialState, draftState => {
      updateFailureReducer(draftState, {
        payload: { error: 'error' },
        type: 'action',
      })
    })

    expect(nextState.updating).toBe(false)
    expect(nextState.updatingError).toBe('error')
  })
})
