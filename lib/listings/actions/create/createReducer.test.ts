import { createNextState } from '@reduxjs/toolkit'
import { z } from 'zod'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { listingFormSchema } from '@/components/Listings/ListingForm/ListingForm'
import { createReducer } from '@/lib/listings/actions/create/createReducer'

describe('createReducer', () => {
  it('adds application to its listing applications in store', () => {
    const initialState: ListingsState = {
      creating: false,
      creatingError: 'error',
    } as ListingsState

    const nextState = createNextState(initialState, draftState => {
      createReducer(draftState, {
        payload: {} as z.infer<typeof listingFormSchema>,
        type: 'listings/createAction',
      })
    })

    expect(nextState.creating).toBe(true)
    expect(nextState.creatingError).toBe(null)
  })
})
