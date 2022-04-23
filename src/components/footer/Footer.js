import React from "react"
import "./Footer.scss"
import {
  FaGithub,
  FaCodepen,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <h2>Grefel Nable</h2>
      {/* footer links */}
      <ul className="footer__links">
        <li>
          <button type="button" onClick={() => (window.location.href = "#")}>
            home
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => (window.location.href = "#about")}
          >
            about
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => (window.location.href = "#portfolio")}
          >
            portfolio
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => (window.location.href = "#contact")}
          >
            contact
          </button>
        </li>
      </ul>
      {/* social links */}
      <ul className="footer__socials">
        <li>
          <a
            href="https://github.com/grefelnable"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/grefelnable"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaCodepen />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/grefel-nable"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/grefel_nable"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/grefelcodes"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
      {/* copyright */}
      <small> &copy; Grefel Nable. All Rights Reserved </small>
    </footer>
  )
}

export default Footer
