import * as React from 'react';
import { BaseLayout } from '../components/BaseLayout';
import Seo from '../components/Seo';
import Content from "../../content/get-involved.mdx";
import { Container } from '@mui/material';

const GetInvolvedPage = () => {
  return (
    <BaseLayout>
      <Container maxWidth="lg">
        <Content />
      </Container>
    </BaseLayout>
  )
}

export const Head = () => <Seo title="Get Involved" />

export default GetInvolvedPage