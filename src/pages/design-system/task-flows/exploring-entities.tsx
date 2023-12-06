import * as React from 'react';
import Seo from '../../../components/Seo';
import Content from "../../../../content/design-system/task-flows/exploring-entities.mdx";
import { SidebarLayout } from '../../../components/SidebarLayout';

const ExploringEntitiesPage = () => {
  return (
    <SidebarLayout>
      <Content />
    </SidebarLayout>
  )
}

export const Head = () => <Seo title="Exploring Entities" />

export default ExploringEntitiesPage