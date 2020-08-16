import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Project from "./Project"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      allContentfulProducts {
        nodes {
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          title
          description
          projects {
            projects {
              name
              by
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <hr className="divider" />
      <div id="projects" className="products">
        {data.allContentfulProducts.nodes.map(project => {
          return (
            <Project
              img={project.image.fluid}
              title={project.title}
              desc={project.description}
              projects={project.projects.projects}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
