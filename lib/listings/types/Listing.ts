import { Application } from '@/lib/applications/types/Application'

export interface Listing {
  applications: Application[]
  id: number
  company: string
  url: string
  title: string
  description: string | null
  product: string
  based_in: string
  timezones: string | null
  stack: string
  compensation: string
  pto: string | null
  remote: boolean
  glassdoor_url: string | null
  glassdoor_rating: number | null
  notes: string | null
  preference: number
}
