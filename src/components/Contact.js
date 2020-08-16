import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query Logo {
      image: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <div id="contact" className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.802134775189!2d75.5769145140452!3d21.00056718601364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fa66b9da285%3A0xc61b0e436ca9e476!2sChaitanya%20Electricals%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1592907955933!5m2!1sen!2sin"
          title="Chaitanya Electricals Pvt. Ltd."
          width="100%"
          height={450}
          frameBorder={0}
          style={{ border: "0" }}
          allowFullScreen
          aria-hidden="false"
          // tabIndex={0}
        />
      </div>

      <div className="contact">
        <div className="phone-col">
          <div className="contact-logo">
            <Image fluid={data.image.childImageSharp.fluid} />
          </div>
          <h3 className="phone">+91 257 222 3040</h3>
          <div className="open-hours">
            <div>Monday - Friday</div>
            <div>10 am - 7pm</div>
          </div>
        </div>
        <div className="address-col">
          <strong className="address-heading">Corporate Office</strong>
          <p className="address">
            Chaitanya Electricals Pvt. Ltd. 79, First Floor, Co-Operative
            Industrial Shopping Complex, Co-Operative MIDC, Jalgaon, Maharashtra
            425003
          </p>
        </div>
        <div className="email-col">
          <strong className="email-heading">Send An Email</strong>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chaitanya.jal@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            chaitanya.jal@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
