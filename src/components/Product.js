import React from "react"
import RightArrow from "../assets/right-arrow.svg"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Product = ({ img, title, desc, projects }) => {
  return (
    <div className="product">
      <div className="product-img">
        <Image fluid={img} />
      </div>
      <div className="product-content">
        <strong className="product-title">{title}</strong>
        <p className="product-desc">{desc}</p>

        {/* <ol className="projects">
          {projects.map(project => {
            return (
              <li className="project">
                <strong className="project-title">{project.name}</strong>
                <div className="project-by">{project.by}</div>
              </li>
            )
          })}
        </ol> */}
      </div>
      <Link to="/project:id">
        <button className="product-btn">
          Read More <img src={RightArrow} alt="Read More" />
        </button>
      </Link>
    </div>
  )
}

export default Product
