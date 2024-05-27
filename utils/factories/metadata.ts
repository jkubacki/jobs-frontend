import { Factory } from 'fishery'
import { faker } from '@faker-js/faker'

import { ListingsMetadata } from '@/lib/listings/actions/load/loadApi'

const metadataFactory = Factory.define<ListingsMetadata>(({ sequence }) => ({
  total: faker.number.int({ min: 1, max: 1000 }),
  page: faker.number.int({ min: 1, max: 1000 }),
  from: faker.number.int({ min: 1, max: 1000 }),
  to: faker.number.int({ min: 1, max: 1000 }),
}))

export { metadataFactory }
