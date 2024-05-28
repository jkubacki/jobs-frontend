import { createNextState } from '@reduxjs/toolkit'

import { createReducer } from '@/lib/replies/actions/create/createReducer'
import { RepliesState } from '@/lib/replies/repliesSlice'
import { applicationFactory } from '@/utils/factories/application'
import { ReplyFormPayload } from '@/components/Replies/ReplyForm/defaultValues'

describe('createReducer', () => {
  it('sets creating to true and creatingError to null', () => {
    const initialState: RepliesState = {
      creating: false,
      creatingError: 'error',
    } as RepliesState

    const application = applicationFactory.build()

    const nextState = createNextState(initialState, draftState => {
      createReducer(draftState, {
        payload: { data: {} as ReplyFormPayload, application },
        type: 'action',
      })
    })

    expect(nextState.creating).toBe(true)
    expect(nextState.creatingError).toBe(null)
  })
})
