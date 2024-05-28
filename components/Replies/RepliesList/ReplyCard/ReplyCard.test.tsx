import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { replyFactory } from '@/utils/factories/reply'
import { ReplyCard } from '@/components/Replies/RepliesList/ReplyCard/ReplyCard'

const reply = replyFactory.build()

describe('ReplyCard', () => {
  it('renders reply card with reply and replies data', () => {
    render(<ReplyCard reply={reply} />)

    const element = screen.getByTestId('ReplyCard')
    expect(element).toBeInTheDocument()

    expect(element).toHaveTextContent(reply.body)
    expect(element).toHaveTextContent(reply.notes || '')
  })

  describe('when reply is rejected', () => {
    it('renders rejected badge', () => {
      render(<ReplyCard reply={replyFactory.build({ rejected: true })} />)

      const element = screen.getByTestId('ReplyCard')
      expect(element).toBeInTheDocument()

      expect(element).toHaveTextContent('Rejected')
    })
  })
})
