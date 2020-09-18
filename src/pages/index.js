import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import About from "../components/about"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin: 1.6rem 0 1.6rem 0;
  color: #db452b;
`

export default ({ data }) => (
  <Layout>
    <SEO title="S.S." />
    <div>
      <About />
      <div id="ornament"></div>
      <h2>List of projects</h2>
      <h4>{data.allMarkdownRemark.totalCount} projects</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
    <br />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
