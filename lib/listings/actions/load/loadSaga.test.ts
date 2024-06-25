import { runSaga } from 'redux-saga'

import { loadSaga } from '@/lib/listings/actions/load/loadSaga'
import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'
import { ListingsMetadata, LoadApiSuccess, loadApi } from '@/lib/listings/actions/load/loadApi'
import { listingFactory } from '@/utils/factories/listing'

jest.mock('lib/listings/actions/load/loadApi')

type Action =
  | ReturnType<typeof ListingsActions.loadSuccess>
  | ReturnType<typeof ListingsActions.loadFailure>

describe('loadSaga', () => {
  it('calls loadApi and handles success response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({
        listings: {
          remoteFilter: null,
          query: '',
        },
      }),
      dispatch: (action: Action) => dispatched.push(action),
    }

    const listings: Listing[] = listingFactory.buildList(2)

    const metadata: ListingsMetadata = { total: 10, page: 1, from: 1, to: 1 }

    const successResponse: LoadApiSuccess = { data: { listings, metadata } }
    const response: ApiResponse = { success: true, data: successResponse.data } as ApiResponse
    ;(loadApi as jest.Mock).mockImplementation(() => response)

    await runSaga(store, loadSaga, ListingsActions.load({ page: 1 }))

    expect(loadApi).toHaveBeenCalledWith({ page: 1, query: '', remoteFilter: null })
    expect(dispatched).toEqual([ListingsActions.loadSuccess({ listings, metadata })])
  })

  it('calls loadApi and handles failure response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({
        listings: {
          remoteFilter: null,
          query: '',
          status: 'active',
        },
      }),
      dispatch: (action: Action) => dispatched.push(action),
    }
    const error = 'Test Error'
    const response: ApiErrorResponse = { success: false, error } as ApiErrorResponse
    ;(loadApi as jest.Mock).mockImplementation(() => response)

    await runSaga(store, loadSaga, ListingsActions.load({ page: 1 }))

    expect(loadApi).toHaveBeenCalledWith({
      page: 1,
      query: '',
      remoteFilter: null,
      status: 'active',
    })
    expect(dispatched).toEqual([ListingsActions.loadFailure({ error })])
  })
})
