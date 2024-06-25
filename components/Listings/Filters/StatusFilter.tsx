'use client'

import { RadioTabs } from '@/components/ui/RadioTabs'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'
import { ListingsState, ListingsActions } from '@/lib/listings/listingsSlice'

const tabs: {
  name: string
  value: ListingsState['status']
}[] = [
  { name: 'Active', value: 'active' },
  { name: 'Rejected', value: 'rejected' },
  { name: 'All', value: null },
]

export function StatusFilter() {
  const dispatch = useAppDispatch()
  const status = useAppSelector(ListingsSelectors.status)

  const tabClick = (status: ListingsState['status'] | null) => {
    dispatch(ListingsActions.setStatus({ status }))
  }

  return <RadioTabs tabs={tabs} tabClick={tabClick} selected={status} />
}
