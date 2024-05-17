import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { applicationFormSchema } from '@/components/Applications/ApplicationForm/ApplicationForm'
import { Application } from '@/lib/applications/types/Application'

export function updateReducer(
  state: Draft<ApplicationsState>,
  _action: PayloadAction<{ application: Application; data: z.infer<typeof applicationFormSchema> }>
) {
  state.updating = true
  state.updatingError = null
}
