import * as React from 'react';
import { Box, List, ListItem, Stack, Typography } from '@mui/material';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@gatsbyjs/reach-router';

interface BaseLayoutProps extends React.PropsWithChildren {
  hasSidebar?: boolean;
}

interface MenuLink {
  name: string;
  path: string;
  fullPath: string;
  children?: MenuLink[] | null
}

interface DataProps {
  site: {
    siteMetadata: {
      menuLinks: MenuLink[];
    }
  }
}

export const Sidebar: React.FC<BaseLayoutProps> = ({
  hasSidebar,
  children 
}) => {
  const { pathname } = useLocation();
  const { site: { siteMetadata: { menuLinks } } } = useStaticQuery<DataProps>(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            path
            children {
              name
              path
              children {
                name
                path
              }
            }
          }
        }
      }
    }
  `);
  // Split pathname by slash and remove empty strings
  const pathnameSplit = pathname.split('/').filter((d: string) => d);
  pathnameSplit.splice(pathnameSplit.length - 1);
  const parentPath = `/${pathnameSplit.join('/')}`;
  const currentPath = removeTrailingSlash(pathname);
  let parentPage: MenuLink | null = null;
  // Default current page to the root home page (first item in menuLinks)
  let currentPage: MenuLink = menuLinks[0];
  /**
   * Traverse the menuLinks to find the current page and its parent
   * Number of nested loops is based on the maximum depth of menuLinks
   */
  menuLinks.forEach((page: MenuLink) => {
    if (page.path === currentPath) {
      currentPage = page;
    }
    if (page.path === parentPath) {
      parentPage = page;
    }
    if (page.children) {
      page.children.forEach((subPage: MenuLink) => {
        if (subPage.path === currentPath) {
          currentPage = subPage;
        }
        if (subPage.path === parentPath) {
          parentPage = subPage;
        }
        if (page.children) {
          page.children.forEach((subSubPage: MenuLink) => {
            if (subSubPage.path === currentPath) {
              currentPage = subSubPage;
            }
            if (subSubPage.path === parentPath) {
              parentPage = subSubPage;
            }
          })
        }
      })
    }
  });
  let sidebarRootLink: MenuLink | null = null;
  let sidebarLinks: MenuLink[] = [];
  // If the current page has child pages
  // then it is the root item in the sidebar and its children are the links.
  // Otherwise, the parent page is the root item and the parent's children are the links.
  if (currentPage.children) {
    sidebarRootLink = currentPage;
    sidebarLinks = currentPage.children;
  } else if (parentPage!.children) {
    sidebarRootLink = parentPage;
    sidebarLinks = parentPage!.children;
  }
  return (
    <Box
      component="aside"
      sx={{ 
        position: 'relative', 
        width: '250px' 
      }}
    >
      <Box
        component="nav"
        sx={{ 
          backgroundColor: 'info.main', 
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 100,
          paddingTop: '3rem',
          width: '250px',
          height: '100%',
          borderRight: '1px solid',
          borderRightColor: 'neutral.main',
          color: '#ffffff',
        }}
      >
        <List>
          {sidebarRootLink && (
            <ListItem
              sx={{
                color: 'neutral.main',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                padding: 0,
              }}
            >
              <Link 
                to={sidebarRootLink.path}
                style={{
                  padding: '0.5rem 1rem',
                  width: '100%'
                }}
              >
                {sidebarRootLink.name}
              </Link>
            </ListItem>
          )}
          {sidebarLinks.map((link, i) => (
            <ListItem 
              key={`${link.name} ${i}`}
              component="li"
              sx={{
                backgroundColor: link.path === currentPath ? 'secondary.main' : 'inherit',
                color: link.path === currentPath ? '#000000' : 'inherit',
                padding: 0,
                transition: '0.25s',
                '&:hover': {
                  color: link.path === currentPath ? '#000000' : 'secondary.main',
                }
              }}
            >
              <Link
                to={link.path}
                style={{
                  padding: '0.5rem 1rem',
                  width: '100%'
                }}
              >
                {link.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
};

const removeTrailingSlash = (str: string) => {     
  return str.replace(/\/$/, "");
}