import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { setRemoteFilterReducer } from '@/lib/listings/actions/setRemoteFilter/setRemoteFilterReducer'

describe('setRemoteFilterReducer', () => {
  it('sets remoteFilter in listings state', () => {
    const initialState: ListingsState = { remoteFilter: null } as ListingsState

    const remoteFilter: ListingsState['remoteFilter'] = true

    const nextState = createNextState(initialState, draftState => {
      setRemoteFilterReducer(draftState, {
        payload: { remoteFilter },
        type: 'action',
      })
    })

    expect(nextState.remoteFilter).toEqual(remoteFilter)
  })
})
