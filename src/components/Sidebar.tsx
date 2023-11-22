import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface BaseLayoutProps extends React.PropsWithChildren {
  hasSidebar?: boolean;
}

export const Sidebar: React.FC<BaseLayoutProps> = ({
  hasSidebar,
  children 
}) => {
  return (
    <Box
      component="nav"
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
          borderRight: '1px solid',
          borderRightColor: 'neutral.main',
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
  )
};