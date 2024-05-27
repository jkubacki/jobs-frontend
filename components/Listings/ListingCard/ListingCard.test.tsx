import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { listingFactory } from '@/utils/factories/listing'
import { ListingCard } from '@/components/Listings/ListingCard/ListingCard'

const listing = listingFactory.build()

describe('ListingCard', () => {
  it('renders listing card with listing and applications data', () => {
    render(<ListingCard listing={listing} />)

    const element = screen.getByTestId('ListingCard')
    expect(element).toBeInTheDocument()

    expect(element).toHaveTextContent(listing.title)
    expect(element).toHaveTextContent(listing.company)
    expect(element).toHaveTextContent(listing.product)
    expect(element).toHaveTextContent(listing.description || '')
    expect(element).toHaveTextContent(listing.notes || '')
    expect(element).toHaveTextContent(listing.compensation)
    expect(element).toHaveTextContent(listing.pto || '')
    expect(element).toHaveTextContent(listing.timezones || '')
    expect(element).toHaveTextContent(listing.based_in || '')

    listing.applications.forEach(application => {
      expect(element).toHaveTextContent(application.notes || '')
    })
  })
})
