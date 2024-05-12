import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

import { JobsState } from '@/lib/jobs/jobsSlice'
import { addJobListingFormSchema } from '@/components/AddJobListingDialog/AddJobListingForm'

export function createReducer(
  state: Draft<JobsState>,
  action: PayloadAction<z.infer<typeof addJobListingFormSchema>>
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
