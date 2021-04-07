// import React, {useState} from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import styled from "styled-components"

// const StyledImg = styled(Img)`
//   width:  23.69rem;
//   height: 13rem;
//   scroll-snap-align: start;
//   flex-shrink: 0;
//   height: 100%;
//   width: 500px;
//   margin-right: 50px;
//   border-radius: 10px;
//   transform-origin: center center;
//   transform: scale(1);
//   transition: transform 0.5s;
//   position: relative;
`
// FIRST OPTION
// const Images = () => (
//   <StaticQuery
//     query={graphql`
//       query imagesQuery {
//         source: allFile(filter: { absolutePath: { regex: "/project-images/" } }) {
//           edges {
//             node {
//               childImageSharp {
//                 fluid(maxWidth: 3000) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//         <div className="slides">
//         {data.source.edges.map(({ node }, i) => (
//         <StyledImg key={i} id={`slide-${i+1}`} fluid={node.childImageSharp.fluid} />
//       ))}
//     </div>
//     )}
//   />
// )


//ALTERNATIVE
// const Images = () => {
// const [index, setIndex] = useState(0)
//   const data = useStaticQuery(graphql`
//   query imagesQuery {
//     source: allFile(filter: { absolutePath: { regex: "/project-images/" } }) {
//       edges {
//         node {
//           name
//           childImageSharp {
//             fluid(maxWidth: 3000) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `)

// const last = data.source.edges.length - 1;


// return (
//   <div className="slides">{
//     data.source.edges.map(({node}, i) => <StyledImg key={i} fluid={node.childImageSharp.fluid} alt={node.name.replace(/-/g, ' ').substring(2)} />)
//     }
//     </div>
// )
// }



// export default Images

//ALTERNATIVE QUERY

// const imagesQuery = useStaticQuery(graphql`
//     query {
//       placeholderImages: allFile(filter: {sourceInstanceName: {eq: "project-images"}}) {
//         edges {
//           node {
//             childImageSharp {
//               fluid(maxWidth: 3000) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   `)


