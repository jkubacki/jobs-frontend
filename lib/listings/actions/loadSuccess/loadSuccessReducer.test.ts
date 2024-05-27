import { createNextState } from '@reduxjs/toolkit'

import listingsSlice, { ListingsState } from '@/lib/listings/listingsSlice'
import { listingFactory } from '@/utils/factories/listing'
import { loadSuccessReducer } from '@/lib/listings/actions/loadSuccess/loadSuccessReducer'
import { metadataFactory } from '@/utils/factories/metadata'

describe('loadSuccessReducer', () => {
  it('sets loading to false, loadingError to null, adds new listings at the bottom, adds metadata', () => {
    const initialState: ListingsState = {
      listings: listingFactory.buildList(1),
      loading: true,
      loadingError: 'error',
      metadata: listingsSlice.getInitialState().metadata,
    } as ListingsState

    const listings = listingFactory.buildList(2)
    const metadata = metadataFactory.build()

    const nextState = createNextState(initialState, draftState => {
      loadSuccessReducer(draftState, {
        payload: { listings, metadata },
        type: 'listings/loadSuccessReducer',
      })
    })

    expect(nextState.loading).toBe(false)
    expect(nextState.loadingError).toBe(null)
    expect(nextState.listings).toEqual([...initialState.listings, ...listings])
    expect(nextState.metadata).toEqual(metadata)
  })
})
