import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Content from "../content/contact.mdx";

const ContactPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage