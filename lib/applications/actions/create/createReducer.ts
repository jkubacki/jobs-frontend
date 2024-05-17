import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { applicationFormSchema } from '@/components/Applications/ApplicationForm/ApplicationForm'

export function createReducer(
  state: Draft<ApplicationsState>,
  _action: PayloadAction<z.infer<typeof applicationFormSchema>>
) {
  state.creating = true
  state.creatingError = null
}
