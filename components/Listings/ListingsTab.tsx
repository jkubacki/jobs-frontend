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
import { Listings } from '@/components/Listings/Listings'
import { Button } from '@/components/ui/button'
import { RadioTabs } from '@/components/RadioTabs/RadioTabs'
import { useAppDispatch } from '@/lib/hooks'
import { ListingsActions, ListingsTypes } from '@/lib/listings/listingsSlice'

export function ListingsTab() {
  const dispatch = useAppDispatch()

  const tabClick = (remoteFilter: ListingsTypes['remoteFilter']) => {
    dispatch(ListingsActions.setRemoteFilter({ remoteFilter }))
  }

  const tabs: {
    name: string
    value: ListingsTypes['remoteFilter']
    state: 'active' | 'inactive'
  }[] = [
    { name: 'All', value: 'all', state: 'active' },
    { name: 'Remote', value: 'remote', state: 'inactive' },
    { name: 'On site', value: 'on-site', state: 'inactive' },
  ]

  return (
    <>
      <div className="flex items-center">
        <RadioTabs tabs={tabs} tabClick={tabClick} />
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
      <Listings />
    </>
  )
}
