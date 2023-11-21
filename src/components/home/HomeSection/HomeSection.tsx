import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

interface HomeSectionProps extends PropsWithChildren {
   variant?: 'light' | 'dark';
   borderPosition?: 'left' | 'right';
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  variant = 'light',
  borderPosition,
  children
}) => {
  return (
    <Box
      sx={{
        padding: 6,
        backgroundColor: variant === 'dark' ? 'info.main' : 'white',
        borderBottomColor: variant === 'dark' ? 'white' : 'error.main',
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderLeftColor: 'error.main',
        borderLeftWidth: borderPosition === 'left' ? 20 : 0,
        borderLeftStyle: 'solid',
        borderRightColor: 'error.main',
        borderRightWidth: borderPosition === 'right' ? 20 : 0,
        borderRightStyle: 'solid',
        color: variant === 'dark' ? 'white' : 'black'
      }}
    >
      <Container maxWidth="xl">
        {children} 
      </Container>
    </Box>
  );
};