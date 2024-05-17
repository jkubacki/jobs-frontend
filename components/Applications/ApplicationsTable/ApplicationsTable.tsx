'use client'

import { useEffect } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Table, TableBody } from '@/components/ui/table'
import { ApplicationTableRow } from '@/components/Applications/ApplicationsTable/ApplicationTableRow/ApplicationTableRow'
import { ApplicationsTableHeaders } from '@/components/Applications/ApplicationsTable/ApplicationsTableHeaders'
import { ErrorAlert } from '@/components/ErrorAlert'
import { ApplicationTablePlaceholderRow } from '@/components/Applications/ApplicationsTable/ApplicationTablePlaceholderRow'
import { LoadNextPageApplicationsButton } from '@/components/Applications/ApplicationsTable/LoadNextPageApplicationsButton'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ApplicationsSelectors } from '@/lib/applications/ApplicationsSelectors'
import { ApplicationsActions } from '@/lib/applications/applicationsSlice'

export function ApplicationsTable() {
  const dispatch = useAppDispatch()
  const applications = useAppSelector(ApplicationsSelectors.applications)
  const loading = useAppSelector(ApplicationsSelectors.loading)
  const loadingError = useAppSelector(ApplicationsSelectors.loadingError)
  const metadata = useAppSelector(ApplicationsSelectors.metadata)
  const moreApplicationsAvailable = useAppSelector(ApplicationsSelectors.moreApplicationsAvailable)

  useEffect(() => {
    dispatch(ApplicationsActions.load({ page: 1 }))
  }, [dispatch])

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Applications</CardTitle>
        <CardDescription>Manage your applications.</CardDescription>
      </CardHeader>
      <CardContent>
        {loadingError && <ErrorAlert title="Couldn't load applications" description={loadingError} />}
        <Table>
          <ApplicationsTableHeaders />
          <TableBody>
            {applications.map(application => (
              <ApplicationTableRow key={application.id} application={application} />
            ))}
            {loading && (
              <>
                {Array.from({ length: 10 }, (_, index) => index + 1).map((index: number) => (
                  <ApplicationTablePlaceholderRow key={index} />
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        {metadata.total > 0 && (
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{metadata.to}</strong> of <strong>{metadata.total}</strong> applications
          </div>
        )}
        {moreApplicationsAvailable && <LoadNextPageApplicationsButton className="m-4" />}
      </CardFooter>
    </Card>
  )
}
