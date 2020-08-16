import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query About {
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulAbout {
        aboutText {
          aboutText
        }
      }
    }
  `)

  return (
    <div id="about" className="container">
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-title">About Us</h1>
          <div className="rect"></div>
          <p className="about-text">
            {data.contentfulAbout.aboutText.aboutText}
          </p>
        </div>
        <div className="about-right">
          <div className="about-image">
            <Image
              fluid={data.file.childImageSharp.fluid}
              alt="About Chaitanya Electricals"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
