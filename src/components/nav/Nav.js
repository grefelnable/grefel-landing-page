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
      </ul>
    </nav>
  )
}

export default Nav
{
  /* <ul>
        <li>
          <a
            href="#"
            className={activeLink === "#" ? "active" : ""}
            onClick={() => setActiveLink("#")}
          >
            <AiOutlineHome className="nav-icon" />
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeLink === "#about" ? "active" : ""}
            onClick={() => setActiveLink("#about")}
          >
            <AiOutlineUser className="nav-icon" />
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={activeLink === "#portfolio" ? "active" : ""}
            onClick={() => setActiveLink("#portfolio")}
          >
            <AiOutlineProject className="nav-icon" />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "#contact" ? "active" : ""}
            onClick={() => setActiveLink("#contact")}
          >
            <AiOutlineMessage className="nav-icon" />
          </a>
        </li>
      </ul> */
}
