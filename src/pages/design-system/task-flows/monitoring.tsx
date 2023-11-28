import * as React from 'react';
import Seo from '../../../components/Seo';
import Content from "../../../content/design-system/task-flows/monitoring.mdx";
import { SidebarLayout } from '../../../components/SidebarLayout';

const MonitoringPage = () => {
  return (
    <SidebarLayout>
      <Content />
    </SidebarLayout>
  )
}

export const Head = () => <Seo title="Monitoring" />

export default MonitoringPage