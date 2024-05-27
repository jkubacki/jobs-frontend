import { Factory } from 'fishery'

import { Application } from '@/lib/applications/types/Application'

const applicationFactory = Factory.define<Application>(({ sequence }) => ({
  id: sequence,
  listing_id: 1,
  applied_at: '2021-01-01',
  cv: true,
  cover_letter: null,
  notes: null,
  preference: 50,
  replies: [],
}))

export { applicationFactory }
