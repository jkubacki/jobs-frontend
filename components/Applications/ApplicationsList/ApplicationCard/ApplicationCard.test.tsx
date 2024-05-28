import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { applicationFactory } from '@/utils/factories/application'
import { ApplicationCard } from '@/components/Applications/ApplicationsList/ApplicationCard/ApplicationCard'

const application = applicationFactory.build()

describe('ApplicationCard', () => {
  it('renders application card with application and applications data', () => {
    render(<ApplicationCard application={application} />)

    const element = screen.getByTestId('ApplicationCard')
    expect(element).toBeInTheDocument()

    expect(element).toHaveTextContent(application.notes || '')
    expect(element).toHaveTextContent(application.replies.length.toString())
  })
})
