import { runSaga } from 'redux-saga'

import { createSaga } from '@/lib/applications/actions/create/createSaga'
import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { CreateApiSuccess, createApi } from '@/lib/applications/actions/create/createApi'
import { applicationFactory } from '@/utils/factories/application'
import { ApplicationFormPayload } from '@/components/Applications/ApplicationForm/defaultValues'
import { listingFactory } from '@/utils/factories/listing'
import { ListingsActions } from '@/lib/listings/listingsSlice'

jest.mock('lib/applications/actions/create/createApi')

type Action =
  | ReturnType<typeof ApplicationsActions.createSuccess>
  | ReturnType<typeof ApplicationsActions.createFailure>

describe('createSaga', () => {
  it('calls createApi and handles success response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }

    const application = applicationFactory.build()
    const successResponse: CreateApiSuccess = { data: application }
    const response = { success: true, data: successResponse.data } as ApiResponse
    ;(createApi as jest.Mock).mockImplementation(() => response)

    const listing = listingFactory.build()
    await runSaga(
      store,
      createSaga,
      ApplicationsActions.create({ data: {} as ApplicationFormPayload, listing })
    )

    expect(createApi).toHaveBeenCalledWith({
      payload: { data: {}, listing },
      type: 'applications/create',
    })
    expect(dispatched).toEqual([
      ApplicationsActions.createSuccess(),
      ListingsActions.addApplication({ application }),
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

    const listing = listingFactory.build()
    await runSaga(
      store,
      createSaga,
      ApplicationsActions.create({ data: {} as ApplicationFormPayload, listing })
    )

    expect(createApi).toHaveBeenCalledWith({
      payload: { data: {}, listing },
      type: 'applications/create',
    })
    expect(dispatched).toEqual([ApplicationsActions.createFailure({ error })])
  })
})
