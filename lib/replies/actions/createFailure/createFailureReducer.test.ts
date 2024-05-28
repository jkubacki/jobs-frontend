import { createNextState } from '@reduxjs/toolkit'

import { RepliesState } from '@/lib/replies/repliesSlice'
import { createFailureReducer } from '@/lib/replies/actions/createFailure/createFailureReducer'

describe('createFailureReducer', () => {
  it('sets creating to false and creatingError to error from the payload', () => {
    const initialState: RepliesState = {
      creating: true,
      creatingError: null,
    } as RepliesState

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
