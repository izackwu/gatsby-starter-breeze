import React from "react"

const TOC = ({ toc }) => {
  if (!toc) {
    return null
  }
  return <div>{toc}</div>
}

export default TOC
