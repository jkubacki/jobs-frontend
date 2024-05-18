'use client'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { useAppSelector } from '@/lib/hooks'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'

export function ListingsBreadcrumbs() {
  const query = useAppSelector(ListingsSelectors.query)
  const remoteFilterName = useAppSelector(ListingsSelectors.remoteFilterName)

  let queryString = query
  if (query.length > 25) {
    queryString = `${query.slice(0, 22)}...`
  }
  const filtersName = [queryString, remoteFilterName].filter(Boolean).join(' ')
  const capitalizedFiltersName = filtersName.charAt(0).toUpperCase() + filtersName.slice(1)

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage>{capitalizedFiltersName || 'All'} listings</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
