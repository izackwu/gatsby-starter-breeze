const _ = require("lodash")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const postListPaginated = path.resolve(
    `./src/templates/post-list-paginated.js`
  )
  const tagsTemplate = path.resolve("src/templates/tags.js")
  const tagsListTemplate = path.resolve("src/templates/tags-list.js")
  const result = await graphql(
    `
      {
        site {
          siteMetadata {
            dateFormat
          }
        }
        postsRemark: allMarkdownRemark(
          filter: { frontmatter: { layout: { ne: "page" } } }
          sort: { fields: [fields___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        pagesRemark: allMarkdownRemark(
          filter: { frontmatter: { layout: { eq: "page" } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(
          filter: { frontmatter: { layout: { ne: "page" } } }
          limit: 1000
        ) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  const dateFormat = result.data.site.siteMetadata.dateFormat || "YYYY-MM-DD"
  // Create non-post pages
  const pages = result.data.pagesRemark.edges
  pages.forEach(page => {
    createPage({
      path: page.node.fields.slug,
      component: pageTemplate,
      context: {
        slug: page.node.fields.slug,
        dateFormat: dateFormat,
      },
    })
  })

  // Create blog posts pages.
  const posts = result.data.postsRemark.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
        dateFormat: dateFormat,
      },
    })
  })

  // Create pagination for posts list
  const postsPerPage = 8
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array(numPages)
    .fill()
    .forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/page/${i + 1}`,
        component: postListPaginated,
        context: {
          currentPage: i + 1,
          totalPage: numPages,
          limit: postsPerPage,
          skip: i * postsPerPage,
          dateFormat: dateFormat,
        },
      })
    })

  // Make tag pages
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue,
        dateFormat: dateFormat,
      },
    })
  })
  createPage({
    path: "/tags/",
    component: tagsListTemplate,
  })

  // Make archive page
  createPage({
    path: "/archive/",
    component: path.resolve("src/templates/archive.js"),
    context: {
      dateFormat: dateFormat,
    },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // slug
    let slug = node.frontmatter.slug || createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    // date: front matter -> file name -> default date
    try {
      var date = node.frontmatter.date
      if (!date) {
        const filename = node.fileAbsolutePath
          .split(/.*[\/|\\]/)[1]
          .split(".")[0]
        date = new Date(filename.substring(0, 10))
        if (isNaN(date)) {
          throw "Invalid Date"
        }
      }
    } catch (error) {
      console.warn(
        "Failed to get date from frontmatter or filename, use default date instead.",
        {
          slug: slug,
          filepath: node.fileAbsolutePath,
          error: error,
        }
      )
      date = new Date("1999-11-26")
    } finally {
      createNodeField({
        node,
        name: "date",
        value: date,
      })
    }
  }
}
