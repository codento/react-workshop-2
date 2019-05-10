import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CodentoH1 from "../components/codento-h1"

export default ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout>
      <SEO title={content.frontmatter.title} />
      <div>
        <CodentoH1 title={content.frontmatter.title} />
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
