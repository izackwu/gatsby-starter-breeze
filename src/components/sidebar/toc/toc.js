import React from "react"
import styles from "./toc.module.scss"

const TOC = ({ toc }) => {
  if (!toc) {
    return null
  }
  return (
    <div dangerouslySetInnerHTML={{ __html: toc }} className={styles["toc"]} />
  )
}

export default TOC
