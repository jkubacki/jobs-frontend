import { z } from 'zod'

import { listingFormSchema } from '@/components/Listings/ListingForm/ListingForm'
import { Listing } from '@/lib/listings/types/Listing'
import Config from '@/utils/config'

export function defaultValues(listing: Listing | null): z.infer<typeof listingFormSchema> {
  if (listing) {
    return {
      company: listing.company,
      url: listing.url,
      title: listing.title,
      description: listing.description || undefined,
      product: listing.product,
      based_in: listing.based_in,
      timezones: listing.timezones || undefined,
      stack: listing.stack,
      compensation: listing.compensation,
      pto: listing.pto || undefined,
      remote: listing.remote,
      glassdoor_url: listing.glassdoor_url || undefined,
      glassdoor_rating: listing.glassdoor_rating || undefined,
      notes: listing.notes || undefined,
      preference: listing.preference,
    }
  } else {
    if (Config.environment === 'PRODUCTION') {
      return {
        company: '',
        url: '',
        title: '',
        description: '',
        product: '',
        based_in: '',
        timezones: '',
        stack: '',
        compensation: '',
        pto: '',
        remote: true,
        glassdoor_url: '',
        glassdoor_rating: 10,
        notes: '',
        preference: 50,
      }
    } else {
      return {
        company: 'Amazon',
        url: 'https://amazon.com',
        title: 'Software Engineer',
        description: 'Work on AWS',
        product: 'AWS',
        based_in: 'Seattle',
        timezones: 'PST',
        stack: 'React, Node, TypeScript',
        compensation: '$250k',
        pto: 'Unlimited',
        remote: true,
        glassdoor_url: 'https://glassdoor.com',
        glassdoor_rating: 45,
        notes: 'Great company',
        preference: 50,
      }
    }
  }
}
