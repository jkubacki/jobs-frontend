import { Application } from '@/lib/applications/types/Application'
import { Card } from '@/components/ui/card'
import { PreferenceBadge } from '@/components/Listings/ListingCard/Badges/PreferenceBadge'
import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'
import { CoverLetterBadge } from '@/components/Applications/ApplicationsList/ApplicationCard/Badges/CoverLetterBadge'

export function ApplicationCard({ application }: { application: Application }) {
  const repiesCount = Math.floor(Math.random() * 10)
  const repliesWord = repiesCount === 1 ? 'reply' : 'replies'

  return (
    <Card className="flex flex-col items-center gap-4 font-normal p-3 text-sm" title="Application">
      <div className="text-sm">Applied at {application.applied_at}</div>
      <div className="text-muted-foreground">{application.notes}</div>
      <div className="flex gap-1 justify-between w-full">
        <div className="flex gap-1">
          {application.cv && <ListingBadge title="CV sent">CV</ListingBadge>}
          <CoverLetterBadge cover_letter={application.cover_letter} />
          <PreferenceBadge preference={application.preference} />
        </div>
        <ListingBadge title="Applied at">
          {repiesCount === 0 ? 'no' : repiesCount} {repliesWord}
        </ListingBadge>
      </div>
    </Card>
  )
}
