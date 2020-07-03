import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>😭</h1>
    <h2> SEEMS WE'VE HIT A SNAG</h2>
    <p>You just hit a link that doesn't exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
