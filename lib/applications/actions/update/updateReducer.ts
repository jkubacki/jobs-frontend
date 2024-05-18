import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'
import { ApplicationFormPayload } from '@/components/Applications/ApplicationForm/defaultValues'

export function updateReducer(
  state: Draft<ApplicationsState>,
  _action: PayloadAction<{ application: Application; data: ApplicationFormPayload }>
) {
  state.updating = true
  state.updatingError = null
}
