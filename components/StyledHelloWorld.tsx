import Button from '@mui/material/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  border: 2px solid red
`

export default function StyledHelloWorld() {
  return (
    <section>
      <StyledButton>Button</StyledButton>
    </section>
  )
}