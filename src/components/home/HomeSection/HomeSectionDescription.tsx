import * as React from 'react';
import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export const HomeSectionDescription: React.FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <Typography
      variant="h6"
      component="p"
      sx={{ fontWeight: 'normal'}}
    >
      {children}
    </Typography>
  );
};