import React from "react"
import { graphql } from "gatsby"

// Components
import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import Main from "../components/main"
import Page from "../components/page"
import PostList from "../components/postlist"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout title={tagHeader}>
      <Sidebar />
      <Main>
        <Page title={tagHeader} nopadding>
          <PostList posts={edges} />
        </Page>
      </Main>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            title
            image
            description
          }
        }
      }
    }
  }
`
