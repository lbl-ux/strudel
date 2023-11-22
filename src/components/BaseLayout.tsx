import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface BaseLayoutProps extends React.PropsWithChildren {
  hasSidebar?: boolean;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
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
          <Box
            sx={{ 
              position: 'relative', 
              width: '250px' 
            }}>
            <Box
              sx={{ 
                backgroundColor: 'info.main', 
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 100,
                paddingTop: '3rem',
                width: '250px',
                height: '100%',
                borderTop: '1px solid #ccc',
                color: '#ffffff',
              }} 
            >
              <p>Hello</p>
              <p>Hello</p>
              <p>Hello</p>
              <p>Hello</p>
              <p>Hello</p>
              <p>Hello</p>
            </Box>
          </Box>
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
          <Footer />
        </Box>
      </Stack>
    </Box>
  )
};