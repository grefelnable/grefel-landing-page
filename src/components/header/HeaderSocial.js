import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

const HeaderSocial = () => {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/grefelnable"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/grefel-nable"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/grefel_nable"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/grefelcodes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaInstagram />
      </a>
    </div>
  )
}

export default HeaderSocial
