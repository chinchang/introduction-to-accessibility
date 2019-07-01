/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className="site-footer decorative-top">
          <p>
            This website is one of my attempt towards Accessibility awareness.
          </p>

          <p>
            A <a href="https://kushagra.dev/lab/">Kushagra Gour</a> product.
            Built with
            {` `}
            <a rel="external" href="https://www.gatsbyjs.org">
              Gatsby
            </a>
            . Hosted on{" "}
            <a rel="external" href="https://netlify.com">
              Netlify
            </a>{" "}
            .{" "}
            <a
              rel="external"
              href="https://github.com/chinchang/introduction-to-accessibility"
            >
              Contribute
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
