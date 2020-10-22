// import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import ProfileImage from "../components/image"
import "./components.css"

const About = () => (
  <div id="profile-container">
    <div id="profile-image">
      <ProfileImage />
    </div>
    <section id="profile-text">
      <div>
        <span id="profile-text-large">A Full Stack Software Engineer</span> with
        a background of Insurance, Finance and Math.
      </div>
      <div id="profile-text-link">
        <Link to="/about-page">
          Read More<span>&rarr;</span>
        </Link>
      </div>
    </section>
  </div>
)
export default About
