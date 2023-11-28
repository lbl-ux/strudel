import * as React from 'react';
import Seo from '../../components/Seo';
import Content from "../../content/typology/getting-started.mdx";
import { SidebarLayout } from '../../components/SidebarLayout';

const GettingStartedPage = () => {
  return (
    <SidebarLayout>
      <Content />
    </SidebarLayout>
  );
};

export const Head = () => <Seo title="Getting Started" />

export default GettingStartedPage