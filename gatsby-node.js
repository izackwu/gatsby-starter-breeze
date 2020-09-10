const _ = require("lodash")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const postListPaginated = path.resolve(
    `./src/templates/post-list-paginated.js`
  )
  const tagsTemplate = path.resolve("src/templates/tags.js")
  const tagsListTemplate = path.resolve("src/templates/tags-list.js")
  const result = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(
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
        tagsGroup: allMarkdownRemark(limit: 1000) {
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
      },
    })
  })
  createPage({
    path: "/tags/",
    component: tagsListTemplate,
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // slug
    let slug = node.frontmatter.slug || createFilePath({ node, getNode })
    console.log("Slug:", slug)
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
      }
    } catch (error) {
      console.log("Failed to get date, use default date instead", error)
      date = new Date("1999-11-26")
    } finally {
      createNodeField({
        node,
        name: "date",
        value: date,
      })
      console.log("date:", date)
    }
  }
}
