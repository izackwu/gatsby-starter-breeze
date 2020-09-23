import "@suziwen/gitalk/dist/gitalk.css"
import "./style-fix.scss"

import Gitalk from "gatsby-plugin-gitalk"
import React from "react"
import styles from "./gitalk.module.scss"

const MyGitalk = ({ title, id }) => {
  return (
    <div className={styles["gitalk"]}>
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
