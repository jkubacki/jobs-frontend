import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { BadgeColors } from '@/components/Listings/ListingCard/Badges/BadgeColors'
import { RejectedBadge } from '@/components/Replies/RepliesList/ReplyCard/Badges/RejectedBadge'

describe('RejectedBadge', () => {
  describe('with rejected true', () => {
    it('renders with negative color', () => {
      render(<RejectedBadge rejected={true} />)

      const element = screen.getByTestId('ListingBadge')
      expect(element).toBeInTheDocument()
      expect(element).toHaveClass(BadgeColors.negative)
    })
  })

  describe('with rejected false', () => {
    it('renders null', () => {
      render(<RejectedBadge rejected={false} />)

      const element = screen.queryByTestId('ListingBadge')
      expect(element).not.toBeInTheDocument()
    })
  })
})
