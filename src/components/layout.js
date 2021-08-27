/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GiveawayBanner from "./giveawaybanner"
import Header from "./header"
import Footer from "./footer"
import Cookies from "./cookies"
import "./layout.css"

const Layout = ({ children }) => {
  const [showCookie, setShowCookie] = useState(true)
  const [cookie, setCookie] = useState(undefined)
  useEffect(() => {
    setCookie(localStorage.getItem("cookie"))
  }, [])
  const data = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `

  return (
    <>
      <Header />
      <main>{children}</main>
      {!cookie && showCookie ? (
        <Cookies
          setCookies={() => {
            localStorage.setItem("cookie", true)
            setShowCookie(false)
          }}
        />
      ) : (
        ""
      )}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
