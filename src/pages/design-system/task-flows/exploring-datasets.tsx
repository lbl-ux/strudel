import * as React from 'react';
import Seo from '../../../components/Seo';
import Content from "../../../content/design-system/task-flows/exploring-datasets.mdx";
import { SidebarLayout } from '../../../components/SidebarLayout';

const ExploringDatasetsPage = () => {
  return (
    <SidebarLayout>
      <Content />
    </SidebarLayout>
  )
}

export const Head = () => <Seo title="Exploring Datasets" />

export default ExploringDatasetsPage