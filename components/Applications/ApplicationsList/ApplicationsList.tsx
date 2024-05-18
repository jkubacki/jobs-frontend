import { ApplicationCard } from '@/components/Applications/ApplicationsList/ApplicationCard'
import { Application } from '@/lib/applications/types/Application'
import { Badge } from '@/components/ui/badge'

export function ApplicationsList({ applications }: { applications: Application[] }) {
  const applicationsWord = applications.length === 1 ? 'application' : 'applications'

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="text-sm text-muted-foreground flex items-center gap-1">
        <Badge variant={'outline'}>
          {applications.length} {applicationsWord}
        </Badge>
      </div>
      {applications.map(application => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  )
}
