import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'

export function deleteReducer(
  state: Draft<ApplicationsState>,
  _action: PayloadAction<{ application: Application }>
) {}
