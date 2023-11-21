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
          <Grid container columnSpacing={4}>
            <Grid item sm={6}>
              <InnerCardItem
                title="Typology"
                description="A tool for categorizing key elements making up scientific software projects"
                link={<Link to='/'>Learn more</Link>}
              />
            </Grid>
            <Grid item sm={6}>
              <InnerCardItem
                title="Design System"
                description="A tool to streamline scientific software UI design and development"
                link={<Link to='/'>Learn more</Link>}
              />
            </Grid>
          </Grid>
        }
      />            
    </HomeSection>
  );
};

interface InnerCardItemProps {
  title: string;
  description: string;
  link: React.ReactNode;
}

const InnerCardItem: React.FC<InnerCardItemProps> = ({
  title,
  description,
  link
}) => {
  return (
    <Box
      sx={{
        borderColor: 'primary.main',
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 3
      }}
    >
      <Stack spacing={2}>
        <Typography 
          variant="h4" 
          component="h3" 
          sx={{ fontWeight: 'bold'}}
        >
          {title}
        </Typography>
        <HomeSectionDescription>
          {description}
        </HomeSectionDescription>
        {link}
      </Stack>
    </Box>
  )
}