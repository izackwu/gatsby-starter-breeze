import { Link } from "gatsby"
import React from "react"
import styles from "./pagination.module.scss"

const Pagination = ({
  prevText,
  prevLink,
  nextText,
  nextLink,
  currentText,
}) => {
  return (
    <nav className={styles["pagination"]}>
      <div className={styles["pagination__prev"]}>
        {prevLink && (
          <Link to={prevLink} rel="prev">
            {prevText}
          </Link>
        )}
      </div>
      <div className={styles["pagination__current"]}>{currentText}</div>
      <div className={styles["pagination__next"]}>
        {nextLink && (
          <Link to={nextLink} rel="next">
            {nextText}
          </Link>
        )}
      </div>
    </nav>
  )
}

Pagination.defaultProps = {
  prevText: "← PREV",
  nextText: "NEXT →",
  currentText: "",
}

export default Pagination
