import * as React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Content from "../../content/design-system/design-system.mdx";

const DesignSystemPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}

export const Head = () => <Seo title="Design System" />

export default DesignSystemPage