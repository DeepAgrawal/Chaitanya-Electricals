import React from "react"
import Image from "gatsby-image"

const Project = ({ img, title, desc, projects }) => {
  return (
    <div className="product">
      <div className="product-img">
        <Image fluid={img} />
      </div>
      <strong className="product-title">{title}</strong>
      <p className="product-desc">{desc}</p>
      <hr className="p-divider" />
      <strong className="project-heading">Projects</strong>
      <ol className="projects">
        {projects.map(project => {
          return (
            <li className="project">
              <strong className="project-title">{project.name}</strong>
              <div className="project-by">{project.by}</div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Project
