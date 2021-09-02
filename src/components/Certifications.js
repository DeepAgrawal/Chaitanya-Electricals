import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Certification from "./Certification"

const Certifications = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCertificates {
        nodes {
          certificationName
          certificateImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          certificatePdf {
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <div id="certifications" className="certifications">
      <div className="certifications-heading">
        <h1 className="certifications-title">Certifications</h1>
        <div className="rect"></div>
      </div>
      <div className="cards">
        {data.allContentfulCertificates.nodes.map(cert => {
          return (
            <Certification
              name={cert.certificationName}
              img={cert.certificateImage.fluid}
              pdf={cert.certificatePdf.file.url}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Certifications
