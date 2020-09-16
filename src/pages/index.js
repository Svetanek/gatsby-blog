import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
// import ProfileImage from "../components/image"
import About from "../components/about"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #e04251;
`

export default ({ data }) => (
  <Layout>
    <SEO title="S.S." />
    <div>
      <About />

      <h1>List of projects</h1>
      <h4>{data.allMarkdownRemark.totalCount} posts</h4>
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
    <Link to="/resume/">
      <button>RESUME</button>
    </Link>{" "}
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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
