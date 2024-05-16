'use client'

import { RadioTabs } from '@/components/ui/RadioTabs'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'
import { ListingsState, ListingsActions } from '@/lib/listings/listingsSlice'

const tabs: {
  name: string
  value: ListingsState['remoteFilter']
}[] = [
  { name: 'All', value: null },
  { name: 'Remote', value: true },
  { name: 'On site', value: false },
]

export function RemoteRadioFilter() {
  const dispatch = useAppDispatch()
  const remoteFilter = useAppSelector(ListingsSelectors.remoteFilter)

  const tabClick = (remoteFilter: ListingsState['remoteFilter']) => {
    dispatch(ListingsActions.setRemoteFilter({ remoteFilter }))
  }

  return <RadioTabs tabs={tabs} tabClick={tabClick} selected={remoteFilter} />
}
