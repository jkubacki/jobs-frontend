import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { createListingFormSchema } from '@/components/CreateListingDialog/CreateListingForm'

export function createReducer(
  state: Draft<ListingsState>,
  _action: PayloadAction<z.infer<typeof createListingFormSchema>>
) {
  state.creating = true
  state.creatingError = null
}
