import React from "react"
import "./components.css"

const Footer = () => (
  <footer id="footer">
    <div>
      © Svetlana Shinkar, {new Date().getFullYear()}
      {` `} Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)
export default Footer
