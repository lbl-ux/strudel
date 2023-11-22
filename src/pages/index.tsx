import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Content from "../content/home.mdx";
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { Background } from '../components/home/Background';
import { Vision } from '../components/home/Vision';
import { Team } from '../components/home/Team';
import { Navbar } from '../components/Navbar';

const IndexPage: React.FC = () => {
  return (
    <Stack>
      <Navbar/>
      <Hero />
      <About />
      <Background />
      <Vision />
      <Team />
    </Stack>
  );
};

export const Head = () => <Seo title="Home Page" />

export default IndexPage