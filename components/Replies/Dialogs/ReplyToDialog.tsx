'use client'

import { z } from 'zod'

import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { DialogHeader } from '@/components/ui/dialog'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RepliesActions } from '@/lib/replies/repliesSlice'
import { ReplyForm, replyFormSchema } from '@/components/Replies/ReplyForm/ReplyForm'
import { ReplyFormPayload } from '@/components/Replies/ReplyForm/defaultValues'
import { RepliesSelectors } from '@/lib/replies/RepliesSelectors'

export function ReplyToDialog() {
  const replyingTo = useAppSelector(RepliesSelectors.replyingTo)
  const replying = useAppSelector(RepliesSelectors.replying)
  const replyingError = useAppSelector(RepliesSelectors.replyingError)

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={!!replyingTo}
      onOpenChange={(open: boolean) => {
        if (!open) dispatch(RepliesActions.setReplyingTo({ application: null }))
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
            if (replyingTo) dispatch(RepliesActions.create({ data, application: replyingTo }))
          }}
          reply={null}
          saving={replying}
          error={replyingError}
        />
      </DialogContent>
    </Dialog>
  )
}
