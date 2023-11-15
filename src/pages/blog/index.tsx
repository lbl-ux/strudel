import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { Link, PageProps, graphql } from 'gatsby';

interface DataProps {
  allMdx: {
    nodes: {
      id: string;
      excerpt: string;
      frontmatter: {
        date: string;
        title: string;
        slug: string;
      }
    }[]
  }
}

const BlogPage: React.FC<PageProps<DataProps>>= ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  )
};

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage