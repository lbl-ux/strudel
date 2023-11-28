import * as React from 'react';
import { BaseLayout } from '../../components/BaseLayout';
import Seo from '../../components/Seo';
import Content from "../../content/design-system/design-system.mdx";
import { SidebarLayout } from '../../components/SidebarLayout';

const DesignSystemPage = () => {
  return (
    <SidebarLayout>
      <Content />
    </SidebarLayout>
  );
};

export const Head = () => <Seo title="Design System" />

export default DesignSystemPage