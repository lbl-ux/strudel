import * as React from 'react';
import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export const HomeSectionTitle: React.FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <Typography
      variant="h3" 
      component="h2" 
      sx={{ fontWeight: 'bold'}}
    >
      {children}
    </Typography>
  );
};