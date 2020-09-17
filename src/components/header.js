import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import sprite from "../images/sprite.svg"
import "./components.css"

// const icon = () => (
//   <svg>
//     <use xlinkHref={`${IconSprite}#file-text2`}></use>
//   </svg>
// )

const Header = ({ siteTitle }) => (
  <header id="header">
    <h1 id="header-title">
      <Link to="/" id="header-title-link">
        {siteTitle}
      </Link>
    </h1>
    <nav id="header-nav">
      <Link to="/about-page" target="_blank" class="header-nav-link">
        <div>Resume</div>
      </Link>
      <a
        href="https://www.linkedin.com/in/svetlanashinkarnyl/"
        target="_blank"
        className="header-nav-link"
      >
        <div>Linkedin</div>
      </a>
      <Link
        to="https://github.com/Svetanek"
        target="_blank"
        className="header-nav-link"
      >
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
