import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationsState } from '@/lib/applications/applicationsSlice';
import { Application } from '@/lib/applications/types/Application';
import { ApplicationsMetadata } from '@/lib/applications/actions/load/loadApi';

export function loadSuccessReducer(
  state: Draft<ApplicationsState>,
  action: PayloadAction<{ applications: Application[]; metadata: ApplicationsMetadata }>
) {
  const { applications, metadata } = action.payload

  state.loading = false
  state.loadingError = null
  state.applications = [...state.applications, ...applications]
  state.metadata = metadata
}
