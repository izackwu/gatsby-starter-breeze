import Layout from "../components/layout"
import Main from "../components/main"
import Page from "../components/page"
import PostList from "../components/postlist"
import React from "react"
import Sidebar from "../components/sidebar"
import { graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `Tag: ${tag}`

  return (
    <Layout
      title={tagHeader}
      description={`「${tag}」标签下共有 ${totalCount} 篇文章。`}
    >
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
  query($tag: String, $dateFormat: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, layout: { ne: "page" } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
            date(formatString: $dateFormat)
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
