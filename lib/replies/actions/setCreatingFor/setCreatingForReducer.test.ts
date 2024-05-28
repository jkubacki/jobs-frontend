import { createNextState } from '@reduxjs/toolkit'

import { RepliesState } from '@/lib/replies/repliesSlice'
import { applicationFactory } from '@/utils/factories/application'
import { setCreatingForReducer } from '@/lib/replies/actions/setCreatingFor/setCreatingForReducer'

describe('setCreatingForReducer', () => {
  it('sets application that is creatingFor in replies store', () => {
    const initialState: RepliesState = { creatingFor: null } as RepliesState

    const creatingFor = applicationFactory.build()

    const nextState = createNextState(initialState, draftState => {
      setCreatingForReducer(draftState, {
        payload: { application: creatingFor },
        type: 'action',
      })
    })

    expect(nextState.creatingFor).toEqual(creatingFor)
  })
})
