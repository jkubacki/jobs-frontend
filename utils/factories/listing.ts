import { Factory } from 'fishery'
import { faker } from '@faker-js/faker'

import { Listing } from '@/lib/listings/types/Listing'
import { applicationFactory } from '@/utils/factories/application'

const listingFactory = Factory.define<Listing>(({ sequence }) => ({
  id: sequence,
  company: faker.company.name(),
  url: faker.internet.url(),
  title: faker.person.jobTitle(),
  description: faker.person.jobDescriptor(),
  product: faker.commerce.productName(),
  based_in: `${faker.location.city()} ${faker.location.country()}`,
  timezones: 'PST',
  stack: 'Rails, React',
  compensation: '$200k - $220k',
  pto: faker.lorem.sentence(),
  remote: faker.datatype.boolean(),
  glassdoor_url: faker.internet.url(),
  glassdoor_rating: faker.number.int({ min: 10, max: 50 }),
  notes: 'Test Notes',
  preference: faker.number.int({ min: 0, max: 100 }),
  applications: applicationFactory.buildList(2),
}))

export { listingFactory }
