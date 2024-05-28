import { createNextState } from '@reduxjs/toolkit'

import applicationsSlice from '@/lib/applications/applicationsSlice'
import { deleteReducer } from '@/lib/applications/actions/delete/deleteReducer'
import { applicationFactory } from '@/utils/factories/application'

describe('deleteReducer', () => {
  it("doesn't change the store", () => {
    const initialState = applicationsSlice.getInitialState()

    const application = applicationFactory.build()

    const nextState = createNextState(initialState, draftState => {
      deleteReducer(draftState, {
        payload: { application },
        type: 'action',
      })
    })

    expect(nextState).toEqual(initialState)
  })
})
