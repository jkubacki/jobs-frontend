import { runSaga } from 'redux-saga'

import { deleteSaga } from '@/lib/applications/actions/delete/deleteSaga'
import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { deleteApi } from '@/lib/applications/actions/delete/deleteApi'
import { applicationFactory } from '@/utils/factories/application'
import { ListingsActions } from '@/lib/listings/listingsSlice'

jest.mock('lib/applications/actions/delete/deleteApi')

type Action = ReturnType<typeof ListingsActions.removeApplication>

// mock toast
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    warning: jest.fn(),
  },
}))

describe('deleteSaga', () => {
  it('calls deleteApi and handles success response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }

    const response = { success: true } as ApiResponse
    ;(deleteApi as jest.Mock).mockImplementation(() => response)

    const application = applicationFactory.build()
    await runSaga(store, deleteSaga, ApplicationsActions.delete({ application }))

    expect(deleteApi).toHaveBeenCalledWith({
      payload: { application },
      type: 'applications/delete',
    })
    expect(dispatched).toEqual([ListingsActions.removeApplication({ application })])

    const toastSuccessMock = require('sonner').toast.success as jest.Mock
    expect(toastSuccessMock).toHaveBeenCalledWith('Application has been deleted', {
      description: 'With it, all replies have been deleted as well.',
    })
  })

  it('calls deleteApi and handles failure response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }
    const error = 'Test Error'
    const response: ApiErrorResponse = { success: false, error } as ApiErrorResponse
    ;(deleteApi as jest.Mock).mockImplementation(() => response)

    const application = applicationFactory.build()
    await runSaga(store, deleteSaga, ApplicationsActions.delete({ application }))

    expect(deleteApi).toHaveBeenCalledWith({
      payload: { application },
      type: 'applications/delete',
    })

    const toastWarningMock = require('sonner').toast.warning as jest.Mock
    expect(toastWarningMock).toHaveBeenCalledWith(error)
  })
})
