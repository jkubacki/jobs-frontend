import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { ApplicationFormPayload } from '@/components/Applications/ApplicationForm/defaultValues'
import { Listing } from '@/lib/listings/types/Listing'

export function createReducer(
  state: Draft<ApplicationsState>,
  _action: PayloadAction<{ data: ApplicationFormPayload; listing: Listing }>
) {
  state.creating = true
  state.creatingError = null
}
