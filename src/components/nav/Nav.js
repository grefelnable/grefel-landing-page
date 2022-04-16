import React from "react"
import "./Nav.scss"
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMessage,
} from "react-icons/ai"

const Nav = () => {
  const [activeLink, setActiveLink] = React.useState("#")
  console.log(activeLink)
  return (
    <nav>
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
    </nav>
  )
}

export default Nav
