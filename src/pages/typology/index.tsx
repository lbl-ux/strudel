import * as React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Content from "../../content/typology/typology.mdx";

const TypologyPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}

export const Head = () => <Seo title="Typology" />

export default TypologyPage