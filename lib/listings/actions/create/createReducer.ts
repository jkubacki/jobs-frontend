import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { listingFormSchema } from '@/components/Listings/ListingForm/ListingForm'

export function createReducer(
  state: Draft<ListingsState>,
  _action: PayloadAction<z.infer<typeof listingFormSchema>>
) {
  state.creating = true
  state.creatingError = null
}
