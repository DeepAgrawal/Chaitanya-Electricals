import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "header.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="home" className="header">
      <div className="header-image">
        <Image fluid={data.file.childImageSharp.fluid} alt="Chaitanya Ele" />
      </div>
      <div className="inner-header">
        <h1 className="header-title">Chaitanya Electricals Pvt. Ltd.</h1>
        <div className="header-buttons">
          <Link to="/#projects">
            <button className="btn view-projects-btn">View Projects</button>
          </Link>
          <Link to="/demo">
            <button className="btn view-demos-btn">View Demos</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
