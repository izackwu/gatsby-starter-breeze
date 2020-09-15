import React from "react"
import { graphql } from "gatsby"

// Components
import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import Main from "../components/main"
import Page from "../components/page"
import Tags from "../components/tags"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout title="All Tags">
    <Sidebar />
    <Main>
      <Page title="All Tags">
        <Tags tags={group} />
      </Page>
    </Main>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { layout: { ne: "page" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
