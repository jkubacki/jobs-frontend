import { z } from 'zod'

import { applicationFormSchema } from '@/components/Applications/ApplicationForm/ApplicationForm'
import { Application } from '@/lib/applications/types/Application'

export function defaultValues(
  application: Application | null
): z.infer<typeof applicationFormSchema> {
  if (application) {
    return {
      applied_at: application.applied_at,
      cv: application.cv ? 'Yes' : 'No',
      cover_letter: application.cover_letter || undefined,
      notes: application.notes || undefined,
      preference: application.preference,
    }
  } else {
    return {
      applied_at: '2024-06-01T00:00:00Z',
      cv: 'Yes',
      cover_letter: 'I am a great fit for this role because I have experience in this field.',
      notes: 'Good application experience.',
      preference: 60,
    }
  }
}
