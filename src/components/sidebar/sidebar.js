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
          }
        }
      }
    `
  )
  const sampleMenu = [
    { url: "/tags", label: "Tags" },
    { url: "#", label: "About Me" },
    { url: "#", label: "Contact" },
  ]
  return (
    <div className={styles.sidebar}>
      <SiteMeta
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />
      <Menu menu={sampleMenu} />
      <TOC toc={toc} />
      <Copyright />
    </div>
  )
}

export default Sidebar
