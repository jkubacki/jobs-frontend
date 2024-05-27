import { createNextState } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { setEditedReducer } from '@/lib/applications/actions/setEdited/setEditedReducer'
import { applicationFactory } from '@/utils/factories/application'

describe('setEditedReducer', () => {
  it('sets application that is edited in applications store', () => {
    const initialState: ApplicationsState = { edited: null } as ApplicationsState

    const edited = applicationFactory.build()

    const nextState = createNextState(initialState, draftState => {
      setEditedReducer(draftState, {
        payload: { application: edited },
        type: 'action',
      })
    })

    expect(nextState.edited).toEqual(edited)
  })
})
