import * as React from 'react';
import { Box, Breakpoint, Container } from '@mui/material';

interface FooterProps {
  containerWidth?: false | Breakpoint
}

export const Footer: React.FC<FooterProps> = ({
  containerWidth = 'lg'
}) => {
  return (
    <Box
      sx={{
        borderTop: '1px solid',
        borderTopColor: 'neutral.main',
      }}
    >
      <Container
        maxWidth={containerWidth}
        sx={{
          paddingTop: 8,
          paddingBottom: 8
        }}
      >
        Footer
      </Container>
    </Box>
  )
};