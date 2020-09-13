import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Main from "../components/main"
import Pagination from "../components/pagination"

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
      <Main>
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

        <Pagination
          prevLink={previous && previous.fields.slug}
          prevText={previous && "← " + previous.frontmatter.title}
          nextLink={next && next.fields.slug}
          nextText={next && next.frontmatter.title + " →"}
        />
      </Main>
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
