import { Factory } from 'fishery'
import { faker } from '@faker-js/faker'

import { Application } from '@/lib/applications/types/Application'

const applicationFactory = Factory.define<Application>(({ sequence }) => ({
  id: sequence,
  listing_id: 1,
  applied_at: faker.date.past().toString(),
  cv: faker.datatype.boolean(),
  cover_letter: faker.lorem.paragraphs(),
  notes: faker.lorem.paragraph(),
  preference: faker.number.int({ min: 0, max: 100 }),
  replies: [],
}))

export { applicationFactory }
