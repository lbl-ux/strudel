import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as classes from './Layout.module.css';

interface LayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(data);
  
  return (
    <div className={classes.container}>
      <header className={classes.siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={classes.navLinks}>
          <li className={classes.navLinkItem}>
            <Link to="/">
              Home
            </Link>
          </li>
          <li className={classes.navLinkItem}>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {pageTitle && <h1 className={classes.heading}>{pageTitle}</h1>}
        {children}
      </main>
    </div>
  )
}

export default Layout