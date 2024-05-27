import { Factory } from 'fishery'

import { Listing } from '@/lib/listings/types/Listing'

const listingFactory = Factory.define<Listing>(({ sequence }) => ({
  id: sequence,
  company: 'Test Company',
  url: 'https://test-company.com',
  title: 'Test Title',
  description: 'Test Description',
  product: 'Test Product',
  based_in: 'Test Location',
  timezones: 'Test Timezones',
  stack: 'Test Stack',
  compensation: 'Test Compensation',
  pto: 'Test PTO',
  remote: true,
  glassdoor_url: 'https://glassdoor.com',
  glassdoor_rating: 4.5,
  notes: 'Test Notes',
  preference: 50,
  applications: [],
}))

export { listingFactory }
