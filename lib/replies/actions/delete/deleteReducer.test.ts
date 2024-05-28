import { createNextState } from '@reduxjs/toolkit'

import repliesSlice, { RepliesState } from '@/lib/replies/repliesSlice'
import { deleteReducer } from '@/lib/replies/actions/delete/deleteReducer'
import { replyFactory } from '@/utils/factories/reply'

describe('deleteReducer', () => {
  it("doesn't change the store", () => {
    const initialState: RepliesState = repliesSlice.getInitialState()

    const reply = replyFactory.build()

    const nextState = createNextState(initialState, draftState => {
      deleteReducer(draftState, {
        payload: { reply },
        type: 'action',
      })
    })

    expect(nextState).toEqual(initialState)
  })
})
