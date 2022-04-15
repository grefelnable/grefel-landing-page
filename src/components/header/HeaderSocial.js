import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

const HeaderSocial = () => {
  return (
    <div className="social-icons">
      <a href="https://github.com/grefelnable" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/grefel-nable" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/grefel_nable" target="_blank">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/grefelcodes" target="_blank">
        <FaInstagram />
      </a>
    </div>
  )
}

export default HeaderSocial
