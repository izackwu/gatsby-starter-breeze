import "@suziwen/gitalk/dist/gitalk.css"
import "./style-fix.scss"

import Gitalk from "gatsby-plugin-gitalk"
import React from "react"

const MyGitalk = ({ title, id }) => {
  return (
    <div
      style={{
        paddingLeft: `35px`,
        paddingRight: `35px`,
      }}
    >
      <Gitalk
        options={{
          id,
          title,
        }}
      />
    </div>
  )
}

export default MyGitalk
