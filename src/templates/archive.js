import Layout from "../components/layout"
import Main from "../components/main"
import Page from "../components/page"
import PostList from "../components/postlist"
import React from "react"
import Sidebar from "../components/sidebar"
import { graphql } from "gatsby"

const Archive = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout title="Archive" description="本站所有文章，尽在此处，一览无余。">
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
  query($dateFormat: String) {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { ne: "page" } } }
      sort: { fields: fields___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            date(formatString: $dateFormat)
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
