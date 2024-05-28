import { z } from 'zod'

import { Reply } from '@/lib/replies/types/Reply'
import { replyFormSchema } from '@/components/Replies/ReplyForm/ReplyForm'
import Config from '@/utils/config'

export function defaultValues(reply: Reply | null): z.infer<typeof replyFormSchema> {
  if (reply) {
    return {
      sent_at: new Date(reply.sent_at),
      by_me: reply.by_me,
      rejection: reply.rejection,
      body: reply.body,
      notes: reply.notes || undefined,
      preference: reply.preference,
    }
  } else {
    if (Config.environment === 'PRODUCTION') {
      return {
        sent_at: new Date(),
        by_me: false,
        rejection: false,
        body: '',
        notes: '',
        preference: 50,
      }
    } else {
      return {
        sent_at: new Date(),
        by_me: false,
        rejection: false,
        body: 'Thank you for applying. We will get back to you soon.',
        notes: 'Automatic response.',
        preference: 50,
      }
    }
  }
}

export type ReplyFormPayload = {
  sent_at: Reply['sent_at']
  by_me: Reply['by_me']
  rejection: Reply['rejection']
  body: Reply['body']
  notes?: Reply['notes']
  preference: Reply['preference']
}
