import * as React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { HomeSection } from './HomeSection/HomeSection';
import { Button } from 'gatsby-theme-material-ui';
import { HomeSectionDescription } from './HomeSection/HomeSectionDescription';
import { HomeSectionTitle } from './HomeSection/HomeSectionTitle';
import { HomeSectionGrid } from './HomeSection/HomeSectionGrid';
import { Link } from 'gatsby';

export const Background: React.FC = () => {
  return (
    <HomeSection variant="light" borderPosition="right">
      <HomeSectionGrid
        leftContent={
          <>
            <HomeSectionTitle>
              Background
            </HomeSectionTitle>
            <HomeSectionDescription>
              The user experience and sustainability of scientific software are pressing challenges that our community is working to address since this essential product impacts the production of knowledge and scientific progress.
            </HomeSectionDescription>
          </>
        }
        rightContent={
          <Stack spacing={2}>
            <Typography 
              variant="h5" 
              component="h3"
              sx={{
                color: 'info.main',
                fontWeight: 'bold',
              }}
            >
              User Experience in Research Softwares
            </Typography>
            <Box>
              <Grid container columnSpacing={4}>
                <Grid item sm={3}>
                  <InnerCardItem>
                    Iterative scientific inquiry results in always evolving user needs
                  </InnerCardItem>
                </Grid>
                <Grid item sm={3}>
                  <InnerCardItem>
                    Software sustainability & efficiency needs regular UX investment
                  </InnerCardItem>
                </Grid>
                <Grid item sm={3}>
                  <InnerCardItem>
                    Science projects often lack the UX processes & best practices
                  </InnerCardItem>
                </Grid>
                <Grid item sm={3}>
                  <InnerCardItem>
                    Commercial software practices can’t be directly applied to science softwares
                  </InnerCardItem>
                </Grid>
              </Grid>
            </Box>
            <Typography>User experience is often an afterthought in scientific software that impacts usability, accessibility, design, & functionality of products.</Typography>
          </Stack>
        }
      />            
    </HomeSection>
  );
};

const InnerCardItem: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'neutral.light',
        borderRadius: 4,
        height: '100%',
        padding: 3,
      }}
    >
      {children}
    </Box>
  )
}