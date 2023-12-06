import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';

interface BaseLayoutProps extends React.PropsWithChildren {
  hasSidebar?: boolean;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  hasSidebar,
  children 
}) => {
  return (
    <Box
      id="base-layout"
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Navbar />
      <Stack
        direction="row"
        sx={{
          height: '100%'
        }}
      >
        {hasSidebar && (
          <Sidebar />
        )}
        <Box
          sx={{
            flex: 1,
            height: '100%',
            width: '100%',
            paddingTop: '3rem'
          }}
        >
          <Box
            component="main"
          >
            {children}
          </Box>
          <Footer containerWidth={hasSidebar ? 'md' : 'lg'} />
        </Box>
      </Stack>
    </Box>
  )
};

export default BaseLayout;