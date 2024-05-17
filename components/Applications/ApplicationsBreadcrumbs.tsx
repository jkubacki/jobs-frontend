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
import { ApplicationsSelectors } from '@/lib/applications/ApplicationsSelectors'

export function ApplicationsBreadcrumbs() {
  const query = useAppSelector(ApplicationsSelectors.query)
  const remoteFilterName = useAppSelector(ApplicationsSelectors.remoteFilterName)

  const filtersName = [query, remoteFilterName].filter(Boolean).join(' ')
  const capitalizedFiltersName = filtersName.charAt(0).toUpperCase() + filtersName.slice(1)

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="applications">Applications</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{capitalizedFiltersName || 'All'} applications</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
