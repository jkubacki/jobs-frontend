import { z } from 'zod'

import { Application } from '@/lib/applications/types/Application'
import { applicationFormSchema } from '@/components/Applications/ApplicationForm/ApplicationForm'

export function defaultValues(
  application: Application | null
): z.infer<typeof applicationFormSchema> {
  if (application) {
    return {
      applied_at: new Date(application.applied_at),
      cv: application.cv,
      cover_letter: application.cover_letter || undefined,
      notes: application.notes || undefined,
      preference: application.preference,
    }
  } else {
    return {
      applied_at: new Date(),
      cv: true,
      cover_letter: "I'm a great fit for this role because I have experience in this field.",
      notes: 'Good application experience',
      preference: 50,
    }
  }
}

export type ApplicationFormPayload = {
  applied_at: Application['applied_at']
  cv: Application['cv']
  cover_letter?: Application['cover_letter']
  notes?: Application['notes']
  preference: Application['preference']
}
