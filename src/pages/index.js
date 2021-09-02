import React from "react"

import "./style.scss"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import About from "../components/About"
import Products from "../components/Products"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"

const IndexPage = () => (
  <div className="chaitanya-electricals-pvt-ltd">
    <Navbar />
    <Header />
    <About />
    <Products />
    <Certifications />
    <Contact />
  </div>
)

export default IndexPage
