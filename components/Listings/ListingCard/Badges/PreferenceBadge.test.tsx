import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { PreferenceBadge } from '@/components/Listings/ListingCard/Badges/PreferenceBadge'
import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'

describe('PreferenceBadge', () => {
  it('renders correctly', () => {
    render(<PreferenceBadge preference={50} />)

    const element = screen.getByTestId('PreferenceBadge')
    expect(element).toBeInTheDocument()
  })

  describe('when preference >= 75', () => {
    it('renders with positive color', () => {
      render(<PreferenceBadge preference={75} />)
      const element = screen.getByTestId('PreferenceBadge')
      expect(element).toHaveClass(BadgeColors.positive)
    })
  })

  describe('when preference >= 50 < 75', () => {
    it('renders with neutral color', () => {
      render(<PreferenceBadge preference={50} />)
      const element = screen.getByTestId('PreferenceBadge')
      expect(element).toHaveClass(BadgeColors.neutral)
    })
  })

  describe('when preference < 50', () => {
    it('renders with negative color', () => {
      render(<PreferenceBadge preference={49} />)
      const element = screen.getByTestId('PreferenceBadge')
      expect(element).toHaveClass(BadgeColors.negative)
    })
  })
})
