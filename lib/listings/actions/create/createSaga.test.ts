import { runSaga } from 'redux-saga'
import { z } from 'zod'

import { createSaga } from '@/lib/listings/actions/create/createSaga'
import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { CreateApiSuccess, createApi } from '@/lib/listings/actions/create/createApi'
import { listingFactory } from '@/utils/factories/listing'
import { listingFormSchema } from '@/components/Listings/ListingForm/ListingForm'

jest.mock('lib/listings/actions/create/createApi')

type Action =
  | ReturnType<typeof ListingsActions.createSuccess>
  | ReturnType<typeof ListingsActions.createFailure>

describe('createSaga', () => {
  it('calls createApi and handles success response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }

    const listing = listingFactory.build()
    const successResponse: CreateApiSuccess = { data: listing }
    const response = { success: true, data: successResponse.data } as ApiResponse
    ;(createApi as jest.Mock).mockImplementation(() => response)

    await runSaga(
      store,
      createSaga,
      ListingsActions.create({} as z.infer<typeof listingFormSchema>)
    )

    expect(createApi).toHaveBeenCalledWith({ payload: {}, type: 'listings/create' })
    expect(dispatched).toEqual([
      ListingsActions.createSuccess({ listing }),
      ListingsActions.setCreatingFormOpen({ creatingFormOpen: false }),
    ])
  })

  it('calls createApi and handles failure response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }
    const error = 'Test Error'
    const response: ApiErrorResponse = { success: false, error } as ApiErrorResponse
    ;(createApi as jest.Mock).mockImplementation(() => response)

    await runSaga(
      store,
      createSaga,
      ListingsActions.create({} as z.infer<typeof listingFormSchema>)
    )

    expect(createApi).toHaveBeenCalledWith({ payload: {}, type: 'listings/create' })
    expect(dispatched).toEqual([ListingsActions.createFailure({ error })])
  })
})
