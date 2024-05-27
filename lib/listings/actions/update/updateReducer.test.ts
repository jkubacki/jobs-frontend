import { createNextState } from '@reduxjs/toolkit'
import { z } from 'zod'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { listingFormSchema } from '@/components/Listings/ListingForm/ListingForm'
import { updateReducer } from '@/lib/listings/actions/update/updateReducer'
import { listingFactory } from '@/utils/factories/listing'

describe('updateReducer', () => {
  it('sets updating to true and updatingError to null', () => {
    const initialState: ListingsState = {
      updating: false,
      updatingError: 'error',
    } as ListingsState

    const listing = listingFactory.build()

    const nextState = createNextState(initialState, draftState => {
      updateReducer(draftState, {
        payload: { listing, data: {} as z.infer<typeof listingFormSchema> },
        type: 'action',
      })
    })

    expect(nextState.updating).toBe(true)
    expect(nextState.updatingError).toBe(null)
  })
})
