'use client'

import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { JobsActions } from '@/lib/jobs/jobsSlice'
import { JobsSelectors } from '@/lib/jobs/JobsSelectors'
import { JobComponent } from '@/lib/jobs/components/JobComponent'

export function Jobs() {
  const dispatch = useAppDispatch()
  const jobs = useAppSelector(JobsSelectors.jobs)

  useEffect(() => {
    dispatch(JobsActions.load())
  }, [dispatch])

  return (
    <div>
      {jobs.map(job => (
        <JobComponent key={job.id} job={job} />
      ))}
    </div>
  )
}
