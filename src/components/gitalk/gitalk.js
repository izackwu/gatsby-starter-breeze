import "gitalk/dist/gitalk.css"
import "./style-fix.scss"

import { graphql, useStaticQuery } from "gatsby"

import GitalkComponent from "gitalk/dist/gitalk-component"
import React from "react"

const MyGitalk = ({ title, id }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            gitalkConfig {
              clientID
              clientSecret
              repo
              owner
              admin
              pagerDirection
              createIssueManually
              distractionFreeMode
              enableHotKey
            }
          }
        }
      }
    `
  )
  let gitalkConfig = site.siteMetadata.gitalkConfig
  gitalkConfig.id = id
  gitalkConfig.title = title
  return (
    <div
      style={{
        paddingLeft: `35px`,
        paddingRight: `35px`,
      }}
    >
      <GitalkComponent options={gitalkConfig} />
    </div>
  )
}

export default MyGitalk
