import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { replyFactory } from '@/utils/factories/reply'
import { addReplyReducer } from '@/lib/listings/actions/addReply/addReplyReducer'
import { listingFactory } from '@/utils/factories/listing'
import { applicationFactory } from '@/utils/factories/application'

describe('addReplyReducer', () => {
  it('adds reply to its applications at the top in store', () => {
    const listingBefore = listingFactory.build({
      applications: [],
    })
    const applicationBefore = applicationFactory.build({
      replies: replyFactory.buildList(2),
      listing_id: listingBefore.id,
    })

    listingBefore.applications = [
      applicationFactory.build({ listing_id: listingBefore.id }),
      applicationBefore,
    ]
    const initialState: ListingsState = {
      listings: [listingFactory.build(), listingBefore],
    } as ListingsState

    const reply = replyFactory.build({ application_id: applicationBefore.id })

    const nextState = createNextState(initialState, draftState => {
      addReplyReducer(draftState, {
        payload: { reply },
        type: 'action',
      })
    })

    const listingAfter = nextState.listings.find(l => l.id === applicationBefore.listing_id)
    const applicationAfter = listingAfter?.applications.find(a => a.id === applicationBefore.id)

    expect(applicationAfter?.replies).toEqual([reply, ...applicationBefore.replies])
  })
})
