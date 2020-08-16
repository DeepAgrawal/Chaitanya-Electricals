import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const [isActive, setIsActive] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const isAciveClass = isActive ? "is-active" : null
  const mobileMenuClass = mobileMenu ? "mobile-nav" : null
  const toggleMenu = () => {
    setIsActive(!isActive)
    setMobileMenu(!mobileMenu)
  }

  const closeMenu = () => {
    if (isActive) {
      setIsActive(false)
    }
    if (mobileMenu) {
      setMobileMenu(false)
    }
  }

  return (
    <div className="nav-wrapper">
      <div className="grad-bar"></div>
      <nav className="navbar">
        <Link to="/" className="logo">
          <Image
            fluid={data.file.childImageSharp.fluid}
            alt="Chaitanya Electricals Pvt. Ltd."
          />
        </Link>

        <div
          onClick={toggleMenu}
          className={`menu-toggle ${isAciveClass}`}
          id="mobile-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav ${mobileMenuClass}`}>
          <li onClick={closeMenu} className="nav-item">
            <Link to="/#home">Home</Link>
          </li>
          <li onClick={closeMenu} className="nav-item">
            <Link to="/#about">About</Link>
          </li>
          <li onClick={closeMenu} className="nav-item">
            <Link to="/#projects">Projects</Link>
          </li>
          <li onClick={closeMenu} className="nav-item">
            <Link to="/#certifications">Certifications</Link>{" "}
          </li>
          <li onClick={closeMenu} className="nav-item">
            <Link to="/#contact">Contact Us</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
