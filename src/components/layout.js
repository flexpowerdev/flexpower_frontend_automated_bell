/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"
import Theme from "../components/theme"
import Search from "../components/search"
import OtherFooter from "./other-footer"
import { GatsbyImage } from "gatsby-plugin-image"
import { useMediaQuery, useTheme } from "@material-ui/core"
const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ children, className, props }) => {
  const { site, siteSearchIndex } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <div className="primary-container">
      <Header>
        <img
          src={
            "https://flexpowercompany.firebaseapp.com/static/media/icon.bf7de6a8.jpg"
          }
          alt="logo"
          style={{
            objectFit: "contain",

            width: `${matches ? "40%" : "15%"}`,
          }}
        />
        <div sx={layoutStyle.nav}>
          <div sx={{ display: ["flex", "flex", "flex", "none"] }}>
            {/* <Search searchIndex={siteSearchIndex.index} /> */}
          </div>
          <Navigation />
        </div>
        <div sx={layoutStyle.appearance}>
          {/* <Search searchIndex={siteSearchIndex.index} /> */}
          <Theme />
        </div>
      </Header>
      <main className={"container " + className}>{children}</main>
      <OtherFooter />
    </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
