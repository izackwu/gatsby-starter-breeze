import Layout from "../components/layout"
import Main from "../components/main"
import Page from "../components/page"
import React from "react"
import Sidebar from "../components/sidebar"

const NotFoundPage = () => {
  return (
    <Layout title="404: Not Found">
      <Sidebar />
      <Main>
        <Page title="404: Not Found">
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Page>
      </Main>
    </Layout>
  )
}

export default NotFoundPage
