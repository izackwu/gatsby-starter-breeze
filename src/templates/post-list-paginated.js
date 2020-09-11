import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

const BlogIndex = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { totalPage, currentPage } = pageContext
  return (
    <Layout title="All posts">
      <Sidebar />
      <div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.fields.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
        <div style={{ display: "flex" }}>
          <div
            style={{
              textAlign: "left",
              width: "40%",
            }}
          >
            {currentPage >= 2 && (
              <Link
                to={currentPage - 1 === 1 ? "/" : "/page/" + (currentPage - 1)}
                rel="prev"
              >
                ← PREV
              </Link>
            )}
          </div>
          <div style={{ textAlign: "center", width: "20%" }}>
            <span>Page {currentPage}</span>
          </div>
          <div
            style={{
              textAlign: "right",
              width: "40%",
            }}
          >
            {currentPage <= totalPage - 1 && (
              <Link to={"/page/" + (currentPage + 1)} rel="next">
                NEXT →
              </Link>
            )}
          </div>
        </div>
      </div>
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
          }
        }
      }
    }
  }
`
