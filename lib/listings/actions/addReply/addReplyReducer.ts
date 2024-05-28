import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { Reply } from '@/lib/replies/types/Reply'
import { ListingsState } from '@/lib/listings/listingsSlice'

export function addReplyReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ reply: Reply }>
) {
  const { reply } = action.payload
  const application_id = reply.application_id

  const listing = state.listings.find(l => l.applications.find(a => a.id === application_id))
  const application = listing?.applications.find(a => a.id === application_id)
  if (application) {
    application.replies = [reply, ...application.replies]
  }
}
