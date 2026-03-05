import React from "react"
// import { Link } from "gatsby"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledBadge = styled(Img)`
display: inline-block;
  height: 4rem;
  width: 4rem;
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "AWS-CloudPractitioner-2020.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
 return (
  <Layout>
    <SEO title="About Page" />
    <div className ="center-horiz" id="carousel-container" >
    <Carousel/>
    </div>

<section>
    <h1 className="center-horiz">About Me</h1>
    <p>
      I'm a Software Engineer with a background in Insurance, Finance and Math.
      At one point of my life I wanted to pursue an actuarial path and passed
      first 2 exams, Probability and Financial Mathematics. And while working as
      a financial advisor required to be in trend{" "}
      <span role="img" aria-label="slightly-smyling-face">
        &#128578;
      </span>{" "}
      and know all about investments, blockchain technologies weren't left
      behind. Digging into blockchain led me to a coding world. So I joined
      Fullstack Academy for their 17 weeks Immersive Software development
      program, which utilized TDD approach for single and pair programming
      workshops. The curriculum included group and single projects. Some of these projects youy can see in the list of my projects on the homepage.
    </p>
    <p>
      After graduation I worked as a Software Engineer at a startup in NYC, where I had an opportunity to work on a mobile application, on both front end and back end.
    </p>
    <p>
      In my most recent role as a software engineer at Anywhere I worked on a variety of projects from concept to production, designing and implementing scalable backend services using Node.js/TypeScript, AWS, MongoDB.
    </p>For more details see my resume by clicking the icon in the header.<p>
    </p>
    </section>
    <section>
    <h2 className="center-horiz">Tech stack</h2>
    <p>
      <span>Back end: </span>Node.js, Typescript, Express, middy, Docker,  MongoDB, Mongoose, Redis, PostgresSQL, Sequelize, GraphQL, SQL, AWS: CloudFormation, Route 53, EC2 (ALB, VPC, SG), Lambda, ECS, S3, DynamoDB, API Gateway, SQS, SNS, Eventbridge, Step Functions, Pinpoint, Secrets Manager, Systems Manager, IAM,Cloudwatch
    </p>
    <p>
      <span>Front end: </span>
      Javascript (ES6), React (inc. hooks, lazy, suspense, context...), React Native, D3/React,
      Redux (inc. Thunk, Saga, reselect), Apollo GraphQL, Gatsby,
      HTML5, CSS3, SCSS, Styled Components,  Material UI
    </p>

    <p>
      <span>Miscellaneous: </span>
       Webpack, Babel, OAuth 2.0 (Okta), Twilio, Sendgrid, TDD(Jest, Sinon, Mockito, Mocha, Chai, Jasmine), Mailosaur, Datadog, SonarQube, Gitlab CI,  Stripe, Swagger,Apple API, Google API, DAV/CardDav protocol
    </p>
   <div className="badgeLine"><a href="https://www.credly.com/badges/129dd9b8-7b86-400f-9780-7ac7e533e33f/public_url" alt="AWS badge"  target="_blank" rel="noopener noreferrer"><StyledBadge fluid={data.placeholderImage.childImageSharp.fluid} /></a><span id="badge-text">AWS Certified Solutions Architect - Associate</span></div>
   </section>

    {/* <br /> */}
    <Link className="center-horiz" to="/">
      <button className="btn">Back to the homepage</button>
    </Link>
  </Layout>

)
      }

export default AboutPage
