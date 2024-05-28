import { runSaga } from 'redux-saga'

import { createSaga } from '@/lib/replies/actions/create/createSaga'
import { ApiErrorResponse, ApiResponse } from '@/utils/api'
import { RepliesActions } from '@/lib/replies/repliesSlice'
import { CreateApiSuccess, createApi } from '@/lib/replies/actions/create/createApi'
import { replyFactory } from '@/utils/factories/reply'
import { ReplyFormPayload } from '@/components/Replies/ReplyForm/defaultValues'
import { applicationFactory } from '@/utils/factories/application'
import { ListingsActions } from '@/lib/listings/listingsSlice'

jest.mock('lib/replies/actions/create/createApi')

type Action =
  | ReturnType<typeof RepliesActions.createSuccess>
  | ReturnType<typeof RepliesActions.createFailure>

describe('createSaga', () => {
  it('calls createApi and handles success response', async () => {
    const dispatched: Action[] = []
    const store = {
      getState: () => ({}),
      dispatch: (action: Action) => dispatched.push(action),
    }

    const reply = replyFactory.build()
    const successResponse: CreateApiSuccess = { data: reply }
    const response = { success: true, data: successResponse.data } as ApiResponse
    ;(createApi as jest.Mock).mockImplementation(() => response)

    const application = applicationFactory.build()
    await runSaga(
      store,
      createSaga,
      RepliesActions.create({ data: {} as ReplyFormPayload, application })
    )

    expect(createApi).toHaveBeenCalledWith({
      payload: { data: {}, application },
      type: 'replies/create',
    })
    expect(dispatched).toEqual([
      RepliesActions.createSuccess(),
      ListingsActions.addReply({ reply }),
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

    const application = applicationFactory.build()
    await runSaga(
      store,
      createSaga,
      RepliesActions.create({ data: {} as ReplyFormPayload, application })
    )

    expect(createApi).toHaveBeenCalledWith({
      payload: { data: {}, application },
      type: 'replies/create',
    })
    expect(dispatched).toEqual([RepliesActions.createFailure({ error })])
  })
})
