import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Product from "./Product"

const Products = () => {
  const data = useStaticQuery(graphql`
    query Products {
      allContentfulProducts {
        nodes {
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          title
          description
          products {
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
      <div id="products" className="products">
        <div id="products-anchor" className="products-anchor"></div>
        {data.allContentfulProducts.nodes.map(product => {
          return (
            <Product
              img={product.image.fluid}
              title={product.title}
              desc={product.description}
              projects={product.products.projects}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Products
