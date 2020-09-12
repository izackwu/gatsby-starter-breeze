import React from "react"
import { Link } from "gatsby"
import styles from "./menu.module.scss"

const Menu = ({ menu }) => {
  return (
    <div className={styles["menu"]}>
      {menu.map(item => (
        <Link to={item.url} className={styles["menu__item"]}>
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default Menu
