import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Main from "../components/main"
import PostList from "../components/postlist"
import Pagination from "../components/pagination"

const BlogIndex = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { totalPage, currentPage } = pageContext

  return (
    <Layout title="All posts">
      <Sidebar />
      <Main>
        <PostList posts={posts} />
        <Pagination
          prevLink={
            currentPage !== 1 &&
            (currentPage === 2 ? "/" : "/page/" + (currentPage - 1))
          }
          nextLink={currentPage !== totalPage && "/page/" + (currentPage + 1)}
          currentText={`Page ${currentPage}`}
        />
      </Main>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { layout: { ne: "page" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            date(formatString: "MMMM DD, YYYY")
            slug
          }
          frontmatter {
            title
            description
            image
          }
        }
      }
    }
  }
`
