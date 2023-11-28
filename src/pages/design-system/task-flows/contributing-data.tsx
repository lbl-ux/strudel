import * as React from 'react';
import Seo from '../../../components/Seo';
import Content from "../../../content/design-system/task-flows/contributing-data.mdx";
import { SidebarLayout } from '../../../components/SidebarLayout';

const ContributingDataPage = () => {
  return (
    <SidebarLayout>
      <Content />
    </SidebarLayout>
  )
}

export const Head = () => <Seo title="Contributing Data" />

export default ContributingDataPage