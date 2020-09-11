import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

const _ = require("lodash")

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      socialImage={post.frontmatter.image}
    >
      <Sidebar />
      <div>
        <article>
          <header>
            <h1
              style={{
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <ul
              style={{
                display: `inline-flex`,
                justifyContent: `flex-start`,
                flexWrap: `wrap`,
                listStyle: `none`,
                margin: `0 0 0 10px`,
              }}
            >
              {post.frontmatter.tags &&
                post.frontmatter.tags.map(tag => {
                  return (
                    <li>
                      <Link
                        to={`/tags/${_.kebabCase(tag)}/`}
                        style={{
                          marginRight: `15px`,
                          padding: `0 1.5em`,
                          border: `1px solid #e6e6e6`,
                          borderRadius: `1.25em`,
                          textDecoration: `none`,
                          display: `inline-block`,
                          boxShadow: `none`,
                        }}
                      >
                        {tag}
                      </Link>
                    </li>
                  )
                })}
            </ul>
            <p
              style={{
                display: `block`,
              }}
            >
              {post.fields.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr style={{}} />
          <footer></footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        date(formatString: "MMMM DD, YYYY")
      }
      frontmatter {
        title
        description
        tags
        image
      }
    }
  }
`
