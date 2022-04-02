import {render,screen} from '@testing-library/react'

import HelloWorld from './HelloWorld'

beforeEach(() => {
  render(<HelloWorld />)
})

it('should render component with heading', () => {
  const heading = screen.getByRole("heading", {
    name: /Hello/
  })
  expect(heading).toBeInTheDocument()
})

it('should render input/textbox', () => {
  const input = screen.getByRole("textbox")
  expect(input).toBeInTheDocument()
})

it('should render button', () => {
  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument()
})