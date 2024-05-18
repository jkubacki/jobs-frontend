import { FileText } from 'lucide-react'

import { Application } from '@/lib/applications/types/Application'
import { Card } from '@/components/ui/card'
import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'
import { PreferenceBadge } from '@/components/Listings/ListingCard/Badges/PreferenceBadge'

export function ApplicationCard({ application }: { application: Application }) {
  const cvColor = application.cv ? 'green-600' : BadgeColors.negative
  return (
    <Card className="flex flex-col items-center gap-2 font-normal p-3 text-sm" title="Application">
      <div className="flex gap-2 justify-between w-full">
        {application.applied_at}
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <FileText className={`h-4 w-4 ${cvColor}`} />
            {application.cv ? 'Sent CV' : "Didn't send CV"}
          </div>
          <PreferenceBadge preference={application.preference} />
        </div>
      </div>
      <div>{application.cover_letter}</div>
      <div className="text-muted-foreground">{application.notes}</div>
    </Card>
  )
}
