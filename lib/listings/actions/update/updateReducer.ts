import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { listingFormSchema } from '@/components/ListingDialog/ListingForm'

export function updateReducer(
  state: Draft<ListingsState>,
  _action: PayloadAction<z.infer<typeof listingFormSchema>>
) {
  state.updating = true
  state.updatingError = null
}
