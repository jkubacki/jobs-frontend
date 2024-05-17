'use client'

import { RadioTabs } from '@/components/ui/RadioTabs'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ApplicationsSelectors } from '@/lib/applications/ApplicationsSelectors'
import { ApplicationsState, ApplicationsActions } from '@/lib/applications/applicationsSlice'

const tabs: {
  name: string
  value: ApplicationsState['remoteFilter']
}[] = [
  { name: 'All', value: null },
  { name: 'Remote', value: true },
  { name: 'On site', value: false },
]

export function RemoteRadioFilter() {
  const dispatch = useAppDispatch()
  const remoteFilter = useAppSelector(ApplicationsSelectors.remoteFilter)

  const tabClick = (remoteFilter: ApplicationsState['remoteFilter']) => {
    dispatch(ApplicationsActions.setRemoteFilter({ remoteFilter }))
  }

  return <RadioTabs tabs={tabs} tabClick={tabClick} selected={remoteFilter} />
}
