import { format } from 'date-fns'

import { Application } from '@/lib/applications/types/Application'
import { Card } from '@/components/ui/card'
import { PreferenceBadge } from '@/components/Listings/ListingCard/Badges/PreferenceBadge'
import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'
import { CoverLetterBadge } from '@/components/Applications/ApplicationsList/ApplicationCard/Badges/CoverLetterBadge'
import { ApplicationActionsDropdown } from '@/components/Applications/ApplicationsList/ApplicationCard/ActionsDropdown/ApplicationActionsDropdown'
import { RepliesBadge } from '@/components/Applications/ApplicationsList/ApplicationCard/Badges/RepliesBadge'
import { RejectedBadge } from '@/components/Replies/RepliesList/ReplyCard/Badges/RejectedBadge'
import { isApplicationRejected } from '@/lib/applications/utils/isApplicationRejected'

export function ApplicationCard({ application }: { application: Application }) {
  return (
    <Card
      className="max-w-screen-md flex flex-col items-center gap-4 font-normal p-3 text-sm"
      title="Application"
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-sm">Application - {format(application.applied_at, 'PPP')}</div>
        <ApplicationActionsDropdown application={application} />
      </div>
      {application.notes && <div className="text-muted-foreground">{application.notes}</div>}
      <div className="flex gap-1 justify-between w-full">
        <div className="flex gap-1">
          <RejectedBadge rejected={isApplicationRejected(application)} />
          <RepliesBadge replies={application.replies} />
          {application.cv && <ListingBadge title="CV sent">CV sent</ListingBadge>}
          <CoverLetterBadge cover_letter={application.cover_letter} />
          <PreferenceBadge preference={application.preference} />
        </div>
      </div>
    </Card>
  )
}
