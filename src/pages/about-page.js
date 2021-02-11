import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />

    <img src="https://github.com/Svetanek/gatsby-blog/raw/master/src/images/photo_japan.jpg" alt ="me in Japan"/>

    <h1>About Me</h1>
    <p>
      I'm a Software Engineer with a background in Insurance, Finance and Math.
      At one point of my life I wanted to pursue an actuarial path and passed
      first 2 exams, Probability and Financial Mathematics. And while working as
      a financial advisor required to be in trend{" "}
      <span role="img" aria-label="slightly-smyling-face">
        &#128578;
      </span>{" "}
      and know all about investments, blockchain technologies weren't left
      behind. As I wanted to dig more and looked at Udemy courses, I saw that
      general programming knowledge was required. The more I looked into it, the
      more I realized that I want to do coding on a serious level. So I joined
      Fullstack Academy for their 17 weeks Immersive Software development
      program, which utilized TDD approach for single and pair programming
      workshops plus tests (though you cannot see these repos on github as their
      status is set to private). The curriculum included a required single
      project - CRUD app and one more on student's choice, one required group
      project - e-commerce app and one more on group's choice.
    </p>
    <p>
      I am excited to continue this journey as also looking for opportunities in
      the tech sector and hope to be able to expand on this newfound love.
    </p>
    <h2>Tech stack</h2>
    <p>
      <span>Proficient: </span>Node.js, Javascript (ES6), React (inc. Hooks, lazy, suspense),
      Redux (inc. Thunk, Saga, reselect), Express, PostgresSQL, Sequelize,
      HTML5, CSS3, SCSS, Styled Components, TDD(Mocha, Chai, Jasmine, Jest, Enzyme), Heroku, Git
    </p>
    <p>
      <span>Some experience: </span>
      Typescript, D3/React, Context API, GraphQL, Apollo GraphQL, Gatsby, SQL, Stripe, Travis CI,
      Firebase, Passport(OAuth), Webpack, Babel, React-Map-GL/Mapbox-GL, Material UI
      Solidity, Truffle, web3, ArcGIS, NYC OpenData
    </p>
    <i>
      *** Also I want to add couple words why I've chosen these colors you see
      on the site. Red and white are colors of flags of 2 countries I love.
      One is my home country, Belarus, which is going through difficult
      times now. So I want to express my support to people, who are peacefully
      fighting against violence and injustice. If you want to read more,
      <a href="https://www.bbc.com/news/world-europe-53799065"> HERE </a>is a
      good article.
      And the second country is Japan 🇯🇵, where I spent some time of my life and was impressed with the country and its people.
    </i>
    <br />
    <br />
    <Link to="/">
      <button className="btn">Back to the homepage</button>
    </Link>
  </Layout>
)

export default AboutPage
