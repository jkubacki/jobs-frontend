'use client'

import { z } from 'zod'

import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { DialogHeader } from '@/components/ui/dialog'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RepliesActions } from '@/lib/replies/repliesSlice'
import { ReplyForm, replyFormSchema } from '@/components/Replies/ReplyForm/ReplyForm'
import { ReplyFormPayload } from '@/components/Replies/ReplyForm/defaultValues'
import { RepliesSelectors } from '@/lib/replies/RepliesSelectors'

export function CreateReplyDialog() {
  const creatingFor = useAppSelector(RepliesSelectors.creatingFor)
  const creating = useAppSelector(RepliesSelectors.creating)
  const creatingError = useAppSelector(RepliesSelectors.creatingError)

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={!!creatingFor}
      onOpenChange={(open: boolean) => {
        if (!open) dispatch(RepliesActions.setCreatingFor({ application: null }))
      }}
    >
      <DialogContent className="overflow-y-scroll max-h-[95%] sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
        <DialogHeader>
          <DialogTitle>Add Reply</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ReplyForm
          onSubmit={(formData: z.infer<typeof replyFormSchema>) => {
            const dateString = formData.sent_at.toISOString()
            const data: ReplyFormPayload = { ...formData, sent_at: dateString }
            if (creatingFor) dispatch(RepliesActions.create({ data, application: creatingFor }))
          }}
          reply={null}
          saving={creating}
          error={creatingError}
        />
      </DialogContent>
    </Dialog>
  )
}
