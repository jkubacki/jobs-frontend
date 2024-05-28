import { Factory } from 'fishery'
import { faker } from '@faker-js/faker'

import { Reply } from '@/lib/replies/types/Reply'

const replyFactory = Factory.define<Reply>(({ sequence }) => ({
  id: sequence,
  application_id: 1,
  sent_at: faker.date.past().toString(),
  by_me: faker.datatype.boolean(),
  rejected: faker.datatype.boolean(),
  body: faker.lorem.paragraph(),
  notes: faker.lorem.paragraph(),
  preference: faker.number.int({ min: 0, max: 100 }),
}))

export { replyFactory }
