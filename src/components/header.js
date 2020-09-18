import { Link, withPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./components.css"

// const icon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg">
//     <use xlinkHref={`${sprite}#file-text2`}></use>
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
      <a
        href="https://drive.google.com/file/d/1009gcQAPJSQRS2L1YYt6TiaIZJdOW52P/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="header-nav-link"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon">
          <use
            xlinkHref={withPrefix("static/sprite.svg#icon-file-text2")}
          ></use>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/svetlanashinkarnyl/"
        target="_blank"
        rel="noopener noreferrer"
        className="header-nav-link"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon">
          <use xlinkHref={withPrefix("static/sprite.svg#icon-linkedin")}></use>
        </svg>
      </a>
      <a
        href="https://github.com/Svetanek"
        target="_blank"
        rel="noopener noreferrer"
        className="header-nav-link"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon">
          <use xlinkHref={withPrefix("static/sprite.svg#icon-github")}></use>
        </svg>
      </a>
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
