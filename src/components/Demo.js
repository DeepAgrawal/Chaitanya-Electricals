import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Demo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="demo-comp">
      <div className="demo-heading">
        <strong>Demos</strong>
        <div className="rect"></div>
      </div>
      <div className="demos">
        <div className="demo-card">
          <div className="thumb">
            <Image
              fluid={data.file.childImageSharp.fluid}
              alt="Chaitanya Ele"
            />
            <p className="demo-title">Demo Title 1</p>
          </div>
        </div>
        <div className="demo-card">
          <div className="thumb">
            <Image
              fluid={data.file.childImageSharp.fluid}
              alt="Chaitanya Ele"
            />
            <p className="demo-title">Demo Title 2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
