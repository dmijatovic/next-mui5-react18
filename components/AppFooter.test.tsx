import { render, screen } from '@testing-library/react'

import AppFooter from './AppFooter'

beforeEach(() => {
  render(<AppFooter/>)
})

it('should render AppFooter', () => {
  const footer = screen.getByTestId("app-footer")
  expect(footer).toBeInTheDocument()
})