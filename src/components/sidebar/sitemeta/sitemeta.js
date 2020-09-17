import { Link } from "gatsby"
import React from "react"
import styles from "./sitemeta.module.scss"

const SiteMeta = ({ title, description }) => {
  return (
    <Link
      to="/"
      className={styles["sitemeta"]}
      activeClassName={styles["sitemeta_active"]}
    >
      <div className={styles["sitemeta__title"]}> {title} </div>
      <div className={styles["sitemeta__description"]}> {description} </div>
    </Link>
  )
}

export default SiteMeta
