import React from "react"
import { Link } from "gatsby"

const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map(item => (
        <Link to={item.url}>{item.label}</Link>
      ))}
    </div>
  )
}

export default Menu
