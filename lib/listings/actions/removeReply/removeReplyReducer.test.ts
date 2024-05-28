import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { applicationFactory } from '@/utils/factories/application'
import { removeReplyReducer } from '@/lib/listings/actions/removeReply/removeReplyReducer'
import { listingFactory } from '@/utils/factories/listing'
import { replyFactory } from '@/utils/factories/reply'

describe('removeReplyReducer', () => {
  it('removes application from its listing applications in store', () => {
    const listingBefore = listingFactory.build({ applications: [] })

    const applicationToRemoveFrom = applicationFactory.build({
      listing_id: listingBefore.id,
      replies: [],
    })
    const replyToRemove = replyFactory.build({ application_id: applicationToRemoveFrom.id })
    const replyNotToRemove = replyFactory.build({ application_id: applicationToRemoveFrom.id })
    applicationToRemoveFrom.replies = [replyToRemove, replyNotToRemove]

    listingBefore.applications = [
      applicationFactory.build({ listing_id: applicationToRemoveFrom.id }),
      applicationToRemoveFrom,
    ]

    const initialState: ListingsState = {
      listings: [listingFactory.build(), listingBefore],
    } as ListingsState

    const nextState = createNextState(initialState, draftState => {
      removeReplyReducer(draftState, {
        payload: { reply: replyToRemove },
        type: 'action',
      })
    })

    const listingAfter = nextState.listings.find(l => l.id === listingBefore.id)
    const applicationAfter = listingAfter?.applications.find(
      a => a.id === applicationToRemoveFrom.id
    )

    expect(applicationAfter?.replies).toEqual([replyNotToRemove])
  })
})
