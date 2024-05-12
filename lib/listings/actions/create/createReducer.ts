import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { createListingFormSchema } from '@/components/CreateListingDialog/CreateListingForm'

export function createReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<z.infer<typeof createListingFormSchema>>
) {
  const {
    company,
    url,
    title,
    description,
    product,
    based_in,
    timezones,
    stack,
    compensation,
    pto,
    remote,
    glassdoor_url,
    glassdoor_rating,
    notes,
    preference,
  } = action.payload
}
