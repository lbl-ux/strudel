import * as React from 'react';
import Seo from '../../../components/Seo';
import Content from "../../../content/design-system/task-flows/optimization.mdx";
import { SidebarLayout } from '../../../components/SidebarLayout';

const OptimizationPage = () => {
  return (
    <SidebarLayout>
      <Content />
    </SidebarLayout>
  )
}

export const Head = () => <Seo title="Optimization" />

export default OptimizationPage