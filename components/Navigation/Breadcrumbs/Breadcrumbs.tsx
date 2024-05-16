'use client'

import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { useAppSelector } from '@/lib/hooks'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'

export function Breadcrumbs() {
  const query = useAppSelector(ListingsSelectors.query)
  const remoteFilterName = useAppSelector(ListingsSelectors.remoteFilterName)

  const filtersName = [query, remoteFilterName].filter(Boolean).join(' ')
  const capitalizedFiltersName = filtersName.charAt(0).toUpperCase() + filtersName.slice(1)

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="listings">Listings</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{capitalizedFiltersName || 'All'} listings</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
