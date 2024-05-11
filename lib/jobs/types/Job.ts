export interface Job {
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
  remote: string
  glassdoor_url: string | null
  glassdoor_rating: number | null
  notes: string | null
  preference: number
}
