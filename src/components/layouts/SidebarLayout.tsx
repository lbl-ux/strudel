import * as React from 'react';
import { Box, Container, Stack } from '@mui/material';
import BaseLayout from './BaseLayout';

const SidebarLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <BaseLayout hasSidebar>
      <Container component="article" maxWidth="md">
        {children}
      </Container>
    </BaseLayout>
  )
};

export  default SidebarLayout;