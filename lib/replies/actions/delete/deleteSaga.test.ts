import { runSaga } from 'redux-saga'

import { deleteSaga } from '@/lib/replies/actions/delete/deleteSaga'
import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { RepliesActions } from '@/lib/replies/repliesSlice'
import { deleteApi } from '@/lib/replies/actions/delete/deleteApi'
import { replyFactory } from '@/utils/factories/reply'
import { ListingsActions } from '@/lib/listings/listingsSlice'

jest.mock('lib/replies/actions/delete/deleteApi')

type Action = ReturnType<typeof ListingsActions.removeReply>

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

    const reply = replyFactory.build()
    await runSaga(store, deleteSaga, RepliesActions.delete({ reply }))

    expect(deleteApi).toHaveBeenCalledWith({
      payload: { reply },
      type: 'replies/delete',
    })
    expect(dispatched).toEqual([ListingsActions.removeReply({ reply })])

    const toastSuccessMock = require('sonner').toast.success as jest.Mock
    expect(toastSuccessMock).toHaveBeenCalledWith('Reply has been deleted')
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

    const reply = replyFactory.build()
    await runSaga(store, deleteSaga, RepliesActions.delete({ reply }))

    expect(deleteApi).toHaveBeenCalledWith({
      payload: { reply },
      type: 'replies/delete',
    })

    const toastWarningMock = require('sonner').toast.warning as jest.Mock
    expect(toastWarningMock).toHaveBeenCalledWith(error)
  })
})
