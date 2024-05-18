import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { Application } from '@/lib/applications/types/Application'
import { ListingsState } from '@/lib/listings/listingsSlice'

export function setApplicationReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ application: Application }>
) {
  const { application } = action.payload
  const listing_id = application.listing_id
  const listing = state.listings.find(l => l.id === listing_id)
  if (!listing) return

  listing.applications = listing.applications.map(app =>
    app.id === application.id ? application : app
  )
}
