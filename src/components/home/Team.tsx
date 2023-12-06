import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { HomeSection } from './HomeSection/HomeSection';
import { HomeSectionTitle } from './HomeSection/HomeSectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

export const Team: React.FC = () => {
  const memberImageProps = {
    width: 125,
    height: 125,
    imgStyle: {
      borderRadius: '50%'
    }
  }
  return (
    <HomeSection variant="dark" borderPosition="right">
      <Stack spacing={3}>
        <HomeSectionTitle>
          Our Team
        </HomeSectionTitle>
        <Stack direction="row" spacing={4}>
          <TeamMember
            name="Lavanya Ramakrishnan"
            email="lramakrishnan@lbl.gov"
            image={(
              <StaticImage
                alt="STRUDEL team member photo"
                src="../../../content/images/wallpaper.jpg"
                {...memberImageProps}
              />
            )}
          />
          <TeamMember
            name="Dan Gunter"
            email="dkgunter@lbl.gov"
            image={(
              <StaticImage
                alt="STRUDEL team member photo"
                src="../../../content/images/wallpaper.jpg"
                {...memberImageProps}
              />
            )}
          />
          <TeamMember
            name="Sarah Poon"
            email="sspoon@lbl.gov"
            image={(
              <StaticImage
                alt="STRUDEL team member photo"
                src="../../../content/images/wallpaper.jpg"
                {...memberImageProps}
              />
            )}
          />
          <TeamMember
            name="Rajshree Deshmukh"
            email="rajshreed@lbl.gov"
            image={(
              <StaticImage
                alt="STRUDEL team member photo"
                src="../../../content/images/wallpaper.jpg"
                {...memberImageProps}
              />
            )}
          />
          <TeamMember
            name="Drew Paine"
            email="pained@lbl.gov"
            image={(
              <StaticImage
                alt="STRUDEL team member photo"
                src="../../../content/images/wallpaper.jpg"
                {...memberImageProps}
              />
            )}
          />
          <TeamMember
            name="Cody O'Donnell"
            email="ctodonnell@lbl.gov"
            image={(
              <StaticImage
                alt="STRUDEL team member photo"
                src="../../../content/images/wallpaper.jpg"
                {...memberImageProps}
              />
            )}
          />
        </Stack> 
      </Stack>       
    </HomeSection>
  );
};

interface TeamMemberProps {
  name: string;
  email: string;
  image: React.ReactNode;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  email,
  image,
}) => {
  return (
    <Box
      sx={{
        textAlign: 'center'
      }}
    >
      {image}
      <Typography 
        sx={{
          marginTop: 2,
          maxWidth: 125
        }}
      >
        {name}
      </Typography>
      {/* <Typography>
        {email}
      </Typography> */}
    </Box>
  )
}