/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Navigation from "./nav"
import Footer from "./footer"
import Globalstyle from "./globalstyle"

const Main = styled.main`
  margin-left: 160px;
`

const Layout = ({ children }) => {
  return (
    <>
      <Globalstyle />
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
