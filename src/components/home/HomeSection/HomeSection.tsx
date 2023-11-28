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
        position: 'relative',
        backgroundColor: variant === 'dark' ? 'info.main' : 'white',
        // borderBottomColor: variant === 'dark' ? 'white' : 'error.main',
        // borderBottomWidth: 2,
        // borderBottomStyle: 'solid',
        color: variant === 'dark' ? 'white' : 'black'
      }}
    >
      {borderPosition && (
        <Box
          sx={{
            backgroundColor: 'error.main',
            height: '100%',
            left: borderPosition === 'left' ? 0 : 'auto',
            position: 'absolute',
            right: borderPosition === 'right' ? 0 : 'auto',
            top: 0,
            width: '20px',
          }}
        />
      )}
      <Container 
        maxWidth="lg"
        sx={{
          paddingTop: 8,
          paddingBottom: 8,
          '@media (max-width: 1300px)': {
            paddingLeft: 8,
            paddingRight: 8,
          }
        }}
      >
        {children} 
      </Container>
    </Box>
  );
};