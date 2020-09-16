import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { BiMenu } from "react-icons/bi"

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
  const [open, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.sidebar + (open ? " " + styles.open : "")}>
      <div className={styles.mobileNav}>
        <BiMenu className={styles.mobileNav__icon} onClick={clickHandler} />
        <Link className={styles.mobileNav__title} to="/">
          {site.siteMetadata.title}
        </Link>
      </div>
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
