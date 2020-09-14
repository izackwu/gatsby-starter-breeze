import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SiteMeta from "./sitemeta"
import Menu from "./menu"
import TOC from "./toc"
import Copyright from "./copyright"

import styles from "./sidebar.module.scss"

const Sidebar = ({ toc }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            sidebarMenu {
              url
              label
            }
            footerHTML
          }
        }
      }
    `
  )
  return (
    <div className={styles.sidebar}>
      <SiteMeta
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />
      <Menu menu={site.siteMetadata.sidebarMenu} />
      <TOC toc={toc} />
      <Copyright contentHTML={site.siteMetadata.footerHTML} />
    </div>
  )
}

export default Sidebar
