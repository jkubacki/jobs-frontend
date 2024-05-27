import { runSaga } from 'redux-saga'

import { updateSaga } from '@/lib/applications/actions/update/updateSaga'
import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { UpdateApiSuccess, updateApi } from '@/lib/applications/actions/update/updateApi'
import { applicationFactory } from '@/utils/factories/application'
import { ApplicationFormPayload } from '@/components/Applications/ApplicationForm/defaultValues'
import { ListingsActions } from '@/lib/listings/listingsSlice'

jest.mock('lib/applications/actions/update/updateApi')

type Action =
  | ReturnType<typeof ApplicationsActions.updateSuccess>
  | ReturnType<typeof ApplicationsActions.updateFailure>

describe('updateSaga', () => {
  it('calls updateApi and handles success response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }

    const application = applicationFactory.build()
    const successResponse: UpdateApiSuccess = { data: application }
    const response = { success: true, data: successResponse.data } as ApiResponse
    ;(updateApi as jest.Mock).mockImplementation(() => response)

    await runSaga(
      store,
      updateSaga,
      ApplicationsActions.update({ application, data: {} as ApplicationFormPayload })
    )

    expect(updateApi).toHaveBeenCalledWith({
      payload: { application, data: {} },
      type: 'applications/update',
    })
    expect(dispatched).toEqual([
      ApplicationsActions.updateSuccess(),
      ApplicationsActions.setEdited({ application: null }),
      ListingsActions.setApplication({ application }),
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

    const application = applicationFactory.build()
    await runSaga(
      store,
      updateSaga,
      ApplicationsActions.update({ application, data: {} as ApplicationFormPayload })
    )

    expect(updateApi).toHaveBeenCalledWith({
      payload: { application, data: {} },
      type: 'applications/update',
    })
    expect(dispatched).toEqual([ApplicationsActions.updateFailure({ error })])
  })
})
