import * as React from 'react';
import Layout from '../../../components/BaseLayout';
import Seo from '../../../components/Seo';
import Content from "../../../content/design-system/task-flows/task-flows.mdx";

const TaskFlowsPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}

export const Head = () => <Seo title="Task Flows" />

export default TaskFlowsPage