import * as React from 'react';
import { Box, Container } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'info.main',
        borderTop: '1px solid',
        borderTopColor: 'neutral.main',
        color: '#fff',
      }}
    >
      <Container
        maxWidth="lg"
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