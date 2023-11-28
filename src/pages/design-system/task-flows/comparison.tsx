import * as React from 'react';
import Seo from '../../../components/Seo';
import Content from "../../../content/design-system/task-flows/comparison.mdx";
import { SidebarLayout } from '../../../components/SidebarLayout';

const ComparisonPage = () => {
  return (
    <SidebarLayout>
      <Content />
    </SidebarLayout>
  )
}

export const Head = () => <Seo title="Comparison" />

export default ComparisonPage