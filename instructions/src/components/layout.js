import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import Sidebar from "./sidebar"

import useWindowSize from "../utils/useWindowSize"

const Layout = ({ children }) => {
  const windowSize = useWindowSize()
  const [shrink, setShrink] = useState(false)
  const [isMobile] = useState(windowSize.windowWidth < 500)
  const [isOpen, setIsOpen] = useState(!isMobile)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  function handleScroll() {
    const shouldShrink = document.documentElement.scrollTop > 25

    setShrink(shouldShrink)
  }

  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            sort: {
              fields: [frontmatter___order]
              order: ASC
            }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
                html
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <Header
            shrink={shrink}
            isOpen={isOpen}
            toggleMenu={setIsOpen}
            isMobile={isMobile}
          />
          <div className="container">
            <Sidebar
              data={data.allMarkdownRemark.edges}
              isOpen={isOpen}
              isMobile={isMobile}
            />
            {(!isMobile || (isMobile && !isOpen)) && (
              <div className={`content ${isMobile ? "mobile" : ""}`}>
                <main>{children}</main>
              </div>
            )}
          </div>
          {(!isMobile || (isMobile && !isOpen)) && <Footer />}
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
