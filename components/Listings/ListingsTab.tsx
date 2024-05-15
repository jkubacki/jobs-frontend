'use client'

import { ListFilter } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu'
import { CreateListingDialog } from '@/components/CreateListingDialog/CreateListingDialog'
import { Button } from '@/components/ui/button'
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <CreateListingDialog />
        </div>
      </div>
      <ListingsTable />
    </>
  )
}
