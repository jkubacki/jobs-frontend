import { createNextState } from '@reduxjs/toolkit'

import { RepliesState } from '@/lib/replies/repliesSlice'
import { applicationFactory } from '@/utils/factories/application'
import { createSuccessReducer } from '@/lib/replies/actions/createSuccess/createSuccessReducer'

describe('createSuccessReducer', () => {
  it('sets creating to false, creatingError to null, creatingFor to null', () => {
    const initialState: RepliesState = {
      creatingFor: applicationFactory.build(),
      creating: true,
      creatingError: 'error',
    } as RepliesState

    const nextState = createNextState(initialState, draftState => {
      createSuccessReducer(draftState)
    })

    expect(nextState.creating).toBe(false)
    expect(nextState.creatingError).toBe(null)
    expect(nextState.creatingFor).toEqual(null)
  })
})
