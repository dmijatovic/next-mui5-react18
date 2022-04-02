import Container from '@mui/material/Container';
import React from 'react';

export default function ContentContainer({children,sx}:{children:any,sx?:any}) {
  return (
    <Container
      component="section"
      sx={sx}
    >
      {children}
    </Container>
  )
}