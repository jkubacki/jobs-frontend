import { Job } from '@/lib/jobs/types/Job'

export function JobComponent({ job }: { job: Job }) {
  return (
    <div>
      {job.company} - {job.title}
    </div>
  )
}
