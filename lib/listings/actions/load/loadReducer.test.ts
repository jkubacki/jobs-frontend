import { createNextState } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { loadReducer } from '@/lib/listings/actions/load/loadReducer'
import { listingFactory } from '@/utils/factories/listing'

const initialState: ListingsState = {
  loading: false,
  loadingError: 'error',
  listings: listingFactory.buildList(1),
} as ListingsState

describe('loadReducer', () => {
  describe('when loading first page', () => {
    it('sets loading to true and loadingError and resets listings', () => {
      const nextState = createNextState(initialState, draftState => {
        loadReducer(draftState, {
          payload: { page: 1 },
          type: 'action',
        })
      })

      expect(nextState.loading).toBe(true)
      expect(nextState.loadingError).toBe(null)
      expect(nextState.listings).toEqual([])
    })
  })

  describe('when loading subsequent pages', () => {
    it('sets loading to true and loadingError to null without resetting listings', () => {
      const nextState = createNextState(initialState, draftState => {
        loadReducer(draftState, {
          payload: { page: 2 },
          type: 'action',
        })
      })

      expect(nextState.loading).toBe(true)
      expect(nextState.loadingError).toBe(null)
      expect(nextState.listings).toEqual(initialState.listings)
    })
  })
})
