import { Application } from '@/lib/applications/types/Application'
import { Card } from '@/components/ui/card'
import { PreferenceBadge } from '@/components/Listings/ListingCard/Badges/PreferenceBadge'
import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'
import { CoverLetterBadge } from '@/components/Applications/ApplicationsList/ApplicationCard/Badges/CoverLetterBadge'
import { ApplicationActionsDropdown } from '@/components/Applications/ApplicationsList/ApplicationCard/ActionsDropdown/ApplicationActionsDropdown'

export function ApplicationCard({ application }: { application: Application }) {
  const repiesCount = application.replies.length
  const repliesWord = repiesCount === 1 ? 'reply' : 'replies'

  return (
    <Card
      className="max-w-screen-md flex flex-col items-center gap-4 font-normal p-3 text-sm"
      title="Application"
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-sm">Application {application.applied_at}</div>
        <ApplicationActionsDropdown application={application} />
      </div>
      <div className="text-muted-foreground">{application.notes}</div>
      <div className="flex gap-1 justify-between w-full">
        <div className="flex gap-1">
          {application.cv && <ListingBadge title="CV sent">CV</ListingBadge>}
          <CoverLetterBadge cover_letter={application.cover_letter} />
          <PreferenceBadge preference={application.preference} />
        </div>
        <ListingBadge title="Number of replies">
          {repiesCount === 0 ? 'no' : repiesCount} {repliesWord}
        </ListingBadge>
      </div>
    </Card>
  )
}
