import React from "react"
import { Link } from "gatsby"

const SiteMeta = ({ title, description }) => {
  return (
    <Link to="/">
      <div> {title} </div>
      <div> {description} </div>
    </Link>
  )
}

export default SiteMeta
