import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

const NotFoundPage = () => {
  return (
    <Layout title="404: Not Found">
      <Sidebar />
      <div>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
