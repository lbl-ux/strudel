import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

interface HomeSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export const HomeSectionGrid: React.FC<HomeSectionProps> = ({
  leftContent = 'light',
  rightContent = 'left'
}) => {
  return (
    <Grid container>
      <Grid item sm={5}>
        <Stack spacing={3}>
          {leftContent}
        </Stack>
      </Grid>
      <Grid item sm={7}>
        {rightContent}
      </Grid>
    </Grid>
  );
};