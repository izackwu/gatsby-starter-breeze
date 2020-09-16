import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Main from "../components/main"
import Page from "../components/page"
import PostList from "../components/postlist"

const Archive = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout title="Archive">
      <Sidebar />
      <Main>
        <Page title="Archive" nopadding>
          <PostList posts={posts} compact />
        </Page>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { ne: "page" } } }
      sort: { fields: fields___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            date(formatString: "MMMM DD, YYYY")
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Archive