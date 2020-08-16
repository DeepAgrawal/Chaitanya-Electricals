import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"

import Navbar from "./Navbar"
import Contact from "./Contact"

const NotFound = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "error-404.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div>
      <Navbar />
      <div className="not-found">
        <div className="img-404">
          <Image
            fluid={data.file.childImageSharp.fluid}
            alt="Chaitanya Electricals Pvt. Ltd."
          />
        </div>
        <strong>Wooophs ! Page Not Found (Error 404)</strong>
      </div>
      <Contact />
    </div>
  )
}

export default NotFound
