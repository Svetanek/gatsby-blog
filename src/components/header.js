import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./components.css"

const Header = ({ siteTitle }) => (
  <header id="header">
    <h1 id="header-title">
      <Link to="/" id="header-title-link">
        {siteTitle}
      </Link>
    </h1>
    <nav id="header-nav">
      <Link to="/resume" class="header-nav-link">
        <div>Resume</div>
      </Link>
      <Link
        to="https://www.linkedin.com/in/svetlanashinkarnyl/"
        class="header-nav-link"
      >
        <div>Linkedin</div>
      </Link>
      <Link to="https://github.com/Svetanek" class="header-nav-link">
        <div>Github</div>
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
