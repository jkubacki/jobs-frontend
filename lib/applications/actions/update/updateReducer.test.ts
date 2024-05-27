import { createNextState } from '@reduxjs/toolkit'

import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { updateReducer } from '@/lib/applications/actions/update/updateReducer'
import { applicationFactory } from '@/utils/factories/application'
import { ApplicationFormPayload } from '@/components/Applications/ApplicationForm/defaultValues'

describe('updateReducer', () => {
  it('sets updating to true and updatingError to null', () => {
    const initialState: ApplicationsState = {
      updating: false,
      updatingError: 'error',
    } as ApplicationsState

    const application = applicationFactory.build()

    const nextState = createNextState(initialState, draftState => {
      updateReducer(draftState, {
        payload: { application, data: {} as ApplicationFormPayload },
        type: 'action',
      })
    })

    expect(nextState.updating).toBe(true)
    expect(nextState.updatingError).toBe(null)
  })
})
