import { ListingBadge } from '@/components/Listings/ListingCard/Badges/ListingBadge'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export function CoverLetterBadge({ cover_letter }: { cover_letter: string | null }) {
  if (!cover_letter) return null

  return (
    <ListingBadge title="Cover letter sent">
      <Dialog>
        <DialogTrigger>Cover letter</DialogTrigger>
        <DialogContent className="overflow-y-scroll max-h-[95%] sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
          {cover_letter}
        </DialogContent>
      </Dialog>
    </ListingBadge>
  )
}
