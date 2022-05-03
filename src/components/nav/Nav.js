import React from "react"
import "./Nav.scss"
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMessage,
} from "react-icons/ai"
import { Fade } from "react-reveal"

const Nav = () => {
  const [activeLink, setActiveLink] = React.useState("#")

  return (
    <nav>
      <Fade right>
        <ul>
          <li>
            <button
              type="button"
              className={activeLink === "#" ? "active" : ""}
              onClick={() => {
                window.location.href = "#"
                setActiveLink("#")
                console.log(activeLink)
              }}
            >
              <AiOutlineHome className="nav-icon" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={activeLink === "#about" ? "active" : ""}
              onClick={() => {
                window.location.href = "#about"
                setActiveLink("#about")
                console.log(activeLink)
              }}
            >
              <AiOutlineUser className="nav-icon" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={activeLink === "#portfolio" ? "active" : ""}
              onClick={() => {
                window.location.href = "#portfolio"
                setActiveLink("#portfolio")
                console.log(activeLink)
              }}
            >
              <AiOutlineProject className="nav-icon" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={activeLink === "#contact" ? "active" : ""}
              onClick={() => {
                window.location.href = "#contact"
                setActiveLink("#contact")
                console.log(activeLink)
              }}
            >
              <AiOutlineMessage className="nav-icon" />
            </button>
          </li>
        </ul>
      </Fade>
    </nav>
  )
}

export default Nav
