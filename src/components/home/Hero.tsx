import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Stack, Typography } from '@mui/material';
import { HomeSection } from './HomeSection';

export const Hero: React.FC = () => {
  return (
    <HomeSection>
      <Stack spacing={4}>
        <Box
          sx={{
            textAlign: 'center'
          }}
        >
          <Box
            sx={{
              maxWidth: '700px',
              display: 'inline-block'
            }}
          >
            <StaticImage
              alt="STRUDEL header logo"
              src="../../content/images/strudel-logo-transp.png"
            />
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h4" 
            component="h1"
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              display: 'inline-block'
            }}
          >
            Scientific software research for user experience, design, engagement, and learning
          </Typography>
        </Box>
      </Stack>
    </HomeSection>
  );
};