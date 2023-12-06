import * as React from 'react';
import { Box, Container, Stack } from '@mui/material';
import BaseLayout from './BaseLayout';

const ContainerLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <BaseLayout>
      <Container component="article" maxWidth="lg">
        {children}
      </Container>
    </BaseLayout>
  )
};

export default ContainerLayout