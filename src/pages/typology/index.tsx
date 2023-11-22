import * as React from 'react';
import { BaseLayout } from '../../components/BaseLayout';
import Seo from '../../components/Seo';
import Content from "../../content/typology/typology.mdx";
import { SidebarLayout } from '../../components/SidebarLayout';

const TypologyPage = () => {
  return (
    <SidebarLayout>
      <Content />
    </SidebarLayout>
  );
};

export const Head = () => <Seo title="Typology" />

export default TypologyPage