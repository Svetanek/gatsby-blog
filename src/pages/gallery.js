import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
const StyledImg = styled(Img)`
  scroll-snap-align: start;
  flex-shrink: 0;
  height: 100%;
  width: 500px;
  border-radius: 10px;
  transform-origin: center center;
  transform: ${props => `scale(1) translateX(-${500 * props.index}px)` } ;
  transition: transform 0.5s;
  position: relative;
`

const GalleryPage = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => console.log("INDEX", index), [index])

  const data = useStaticQuery(graphql`
  query imagesQuery {
    source: allFile(filter: { absolutePath: { regex: "/project-images/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)

const last = data.source.edges.length - 1;
const generateNavLinks = (last) => {
  const arr = [];
  for (let i = 0; i <= last; i++) {
      arr.push(<button className={`btn-link ${(index === i)? "black": ""}`} key={i} onClick={() => setIndex(i) }/>)
  }
  return arr;
}
const onClickNext = () => {
  index === last? setIndex(0) : setIndex(index + 1)
}

const onClickPrev = () => {
  index === 0? setIndex(last) : setIndex(index - 1)
}
  return (
      <Layout>
        <SEO title="gallery" />
        <h1>Gallery</h1>
       <div>
       <div className="slider">
       <div className="slides">{
    data.source.edges.map(({node}, i) => <StyledImg  key={i} fluid={node.childImageSharp.fluid} alt={node.name} index={index}/>)
    }
    </div>
    <div id="slider__arrows">
      <button className="btn-large" onClick={onClickPrev} >
        <span className="btn-arrow" id="left-arrow" ></span>
      </button>
      <button className="btn-large right-align" onClick={onClickNext} >
        <span className="btn-arrow" id="right-arrow" ></span>
      </button>
    </div>
    <nav id="slider__links">
      {generateNavLinks(last)}
    </nav>
    </div>
       </div>
      </Layout>
    )
}

export default GalleryPage


  /* <img src="/images/me_Tokyo.jpg" alt="me" id="slide-1" />
  <img src="/images/loan-vs-wholelife_screen.png" alt="" id="slide-2" />
  <img src="/images/Screen Shot 2020-09-09 at 9.55.20 PM.png" alt="" id="slide-3" />
  <img src="/images/Screen Shot 2020-09-10 at 2.00.17 PM.png" alt="" id="slide-4" /> */
