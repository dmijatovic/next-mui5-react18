
import Box from '@mui/material/Box'
import ContentContainer from './ContentContainer'

export default function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'primary.main',
        color: 'primary.contrastText'
      }}
      data-testid="app-footer"
    >
      <ContentContainer
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h4>Left side footer</h4>
        </div>
        <div>
          <h4>Right side footer</h4>
        </div>
      </ContentContainer>
    </Box>
  )
}