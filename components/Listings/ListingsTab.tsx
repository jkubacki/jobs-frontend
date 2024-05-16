'use client'

import { ListingDialog } from '@/components/ListingDialog/ListingDialog'
import { RadioTabs } from '@/components/RadioTabs/RadioTabs'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsActions, ListingsState } from '@/lib/listings/listingsSlice'
import { ListingsTable } from '@/components/Listings/ListingsTable'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'

export function ListingsTab() {
  const dispatch = useAppDispatch()
  const remoteFilter = useAppSelector(ListingsSelectors.remoteFilter)

  const tabClick = (remoteFilter: ListingsState['remoteFilter']) => {
    dispatch(ListingsActions.setRemoteFilter({ remoteFilter }))
  }

  const tabs: {
    name: string
    value: ListingsState['remoteFilter']
  }[] = [
    { name: 'All', value: null },
    { name: 'Remote', value: true },
    { name: 'On site', value: false },
  ]

  return (
    <>
      <div className="flex items-center">
        <RadioTabs tabs={tabs} tabClick={tabClick} selected={remoteFilter} />
        <div className="ml-auto flex items-center gap-2">
          <ListingDialog title="Add Listing" action={ListingsActions.create} />
        </div>
      </div>
      <ListingsTable />
    </>
  )
}
