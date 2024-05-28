'use client'

import { RadioTabs } from '@/components/ui/RadioTabs'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'
import { ListingsState, ListingsActions } from '@/lib/listings/listingsSlice'

const tabs: {
  name: string
  value: ListingsState['showRejected']
}[] = [
  { name: 'Active', value: false },
  { name: 'All', value: true },
]

export function ShowRejectedFilter() {
  const dispatch = useAppDispatch()
  const showRejected = useAppSelector(ListingsSelectors.showRejected)

  const tabClick = (showRejected: ListingsState['showRejected'] | null) => {
    if (showRejected !== null) dispatch(ListingsActions.setShowRejected({ showRejected }))
  }

  return <RadioTabs tabs={tabs} tabClick={tabClick} selected={showRejected} />
}
