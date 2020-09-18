import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

import { BiMenu } from "react-icons/bi"
import Copyright from "./copyright"
import Menu from "./menu"
import SiteMeta from "./sitemeta"
import SocialLinks from "./social-links"
import TOC from "./toc"
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
            social {
              douban
              email
              facebook
              github
              instagram
              linkedin
              rss
              telegram
              twitter
              youtube
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
      <SocialLinks social={site.siteMetadata.social} />
      <TOC toc={toc} />
      <Copyright contentHTML={site.siteMetadata.footerHTML} />
    </div>
  )
}

export default Sidebar
