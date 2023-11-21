import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Content from "../content/contact.mdx";
import Stack from '@mui/material/Stack';
import { Button } from 'gatsby-theme-material-ui';

const ContactPage = () => {
  return (
    <Layout>
      <Stack p={4} spacing={2}>
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="success">success</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="error">error</Button>
      </Stack>
      <Content />
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage