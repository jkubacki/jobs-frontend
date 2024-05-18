import { SendHorizonal } from 'lucide-react'

import { ApplicationCard } from '@/components/Applications/ApplicationsList/ApplicationCard'
import { Application } from '@/lib/applications/types/Application'

export function ApplicationsList({ applications }: { applications: Application[] }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="text-sm text-muted-foreground flex items-center gap-1">
        Applications
        <SendHorizonal className="h-4 w-4" />
      </div>
      {applications.map(application => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  )
}
