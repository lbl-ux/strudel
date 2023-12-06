import * as React from 'react';
import Seo from '../../../components/Seo';
import Content from "../../../../content/design-system/task-flows/task-flows.mdx";
import { SidebarLayout } from '../../../components/SidebarLayout';

const TaskFlowsPage = () => {
  return (
    <SidebarLayout>
      <Content />
    </SidebarLayout>
  )
}

export const Head = () => <Seo title="Task Flows" />

export default TaskFlowsPage