import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { listingFormSchema } from '@/components/ListingDialog/ListingForm'
import { Listing } from '@/lib/listings/types/Listing'

export function updateReducer(
  state: Draft<ListingsState>,
  _action: PayloadAction<{ listing: Listing; data: z.infer<typeof listingFormSchema> }>
) {
  state.updating = true
  state.updatingError = null
}
