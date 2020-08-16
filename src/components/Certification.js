import React from "react"
import Image from "gatsby-image"

const Certification = ({ name, img, pdf }) => {
  return (
    <>
      <a href={pdf} target="_blank">
        <div className="card">
          <Image fluid={img} alt={name} />
        </div>
      </a>
    </>
  )
}

export default Certification
