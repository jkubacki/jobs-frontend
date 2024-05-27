import { createNextState } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { createFailureReducer } from '@/lib/applications/actions/createFailure/createFailureReducer'

describe('createFailureReducer', () => {
  it('sets creating to false and creatingError to error from the payload', () => {
    const initialState: ApplicationsState = {
      creating: true,
      creatingError: null,
    } as ApplicationsState

    const nextState = createNextState(initialState, draftState => {
      createFailureReducer(draftState, {
        payload: { error: 'error' },
        type: 'action',
      })
    })

    expect(nextState.creating).toBe(false)
    expect(nextState.creatingError).toBe('error')
  })
})
