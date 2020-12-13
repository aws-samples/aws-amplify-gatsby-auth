import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {Main,Footer} from './emotion'
import Header from './header'
import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Fantasy Pro Boxing' },
            { name: 'keywords', content: 'fantasy boxing, boxing,' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <Footer>
          <h2 style={{padding:'1rem',margin:'auto',fontSize:'1rem'}}>
            © {new Date().getFullYear()}{' '}{'Georgand-5'}
          </h2>
        </Footer>
      </>
    )}
  />
)

export default Layout
