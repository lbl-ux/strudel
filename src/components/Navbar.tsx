import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AppBar, Box, Container, Grid, Stack, Toolbar, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StrudelPage } from '../../gatsby-node';

interface PagesResult {
  configJson: {
    pages: StrudelPage[]
  }
}

/**
 * Top navbar component that displays top-level page links from strudel-config.json.
 */
export const Navbar: React.FC = () => {
  const { configJson: { pages } } = useStaticQuery<PagesResult>(graphql`
    query {
      configJson {
        pages {
          name
          path
        }
      }
    }
  `);

  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 500,
      }}
    >
      <AppBar 
        position="static"
        sx={{
          backgroundColor: 'info.main',
          borderBottom: '1px solid',
          borderBottomColor: 'neutral.main',
        }}
      >
        {/* <Container maxWidth="xl"> */}
          <Toolbar variant="dense" sx={{ paddingLeft: 0 }}>
            <Link to="/">
              <StaticImage
                alt="STRUDEL header logo"
                loading="eager"
                placeholder="none"
                src="../../content/images/strudel-logo-icon.png"
              />
            </Link>
            {pages.map((page, i) => (
              <NavItem key={`${page.name} ${i}`} href={page.path}>
                {page.name}
              </NavItem>
            ))}
          </Toolbar>
        {/* </Container> */}
      </AppBar>
    </Box>
  );
};

interface NavItemProps extends PropsWithChildren {
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  children
}) => {
  return (
    <Link to={href}> 
      <Typography
        component="span"
        sx={{
          fontWeight: 'normal',
          padding: 1 
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};