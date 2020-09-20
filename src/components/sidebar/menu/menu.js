import { Link } from "gatsby"
import React from "react"
import styles from "./menu.module.scss"

const Menu = ({ menu }) => {
  return (
    <div className={styles["menu"]}>
      {menu &&
        menu.map(item => (
          <Link
            to={item.url}
            className={styles["menu__item"]}
            activeClassName={styles["menu__item_active"]}
            key={item.url}
          >
            {item.label}
          </Link>
        ))}
    </div>
  )
}

export default Menu
