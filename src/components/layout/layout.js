import React from "react"
import SEO from "./seo"
import styles from "./layout.module.scss"

const Layout = ({ title, description, socialImage, children, meta }) => {
  return (
    <div className={styles.layout}>
      <SEO
        title={title}
        description={description}
        meta={meta}
        socialImage={socialImage}
      />
      {children}
    </div>
  )
}

export default Layout
