import { ApplicationCard } from '@/components/Applications/ApplicationsList/ApplicationCard'
import { Application } from '@/lib/applications/types/Application'

export function ApplicationsList({ applications }: { applications: Application[] }) {
  return (
    <div className="w-full flex flex-col gap-2">
      {applications.map(application => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  )
}
