import { runSaga } from 'redux-saga'
import { z } from 'zod'

import { updateSaga } from '@/lib/listings/actions/update/updateSaga'
import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { UpdateApiSuccess, updateApi } from '@/lib/listings/actions/update/updateApi'
import { listingFactory } from '@/utils/factories/listing'
import { listingFormSchema } from '@/components/Listings/ListingForm/ListingForm'

jest.mock('lib/listings/actions/update/updateApi')

type Action =
  | ReturnType<typeof ListingsActions.updateSuccess>
  | ReturnType<typeof ListingsActions.updateFailure>

describe('updateSaga', () => {
  it('calls updateApi and handles success response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }

    const listing = listingFactory.build()
    const successResponse: UpdateApiSuccess = { data: listing }
    const response = { success: true, data: successResponse.data } as ApiResponse
    ;(updateApi as jest.Mock).mockImplementation(() => response)

    await runSaga(
      store,
      updateSaga,
      ListingsActions.update({ listing, data: {} as z.infer<typeof listingFormSchema> })
    )

    expect(updateApi).toHaveBeenCalledWith({
      payload: { listing, data: {} },
      type: 'listings/update',
    })
    expect(dispatched).toEqual([
      ListingsActions.updateSuccess({ listing }),
      ListingsActions.setEdited({ listing: null }),
    ])
  })

  it('calls updateApi and handles failure response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }
    const error = 'Test Error'
    const response: ApiErrorResponse = { success: false, error } as ApiErrorResponse
    ;(updateApi as jest.Mock).mockImplementation(() => response)

    const listing = listingFactory.build()
    await runSaga(
      store,
      updateSaga,
      ListingsActions.update({ listing, data: {} as z.infer<typeof listingFormSchema> })
    )

    expect(updateApi).toHaveBeenCalledWith({
      payload: { listing, data: {} },
      type: 'listings/update',
    })
    expect(dispatched).toEqual([ListingsActions.updateFailure({ error })])
  })
})
