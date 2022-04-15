import React from "react"
import Resume from "../../assets/resume-grefel.pdf"

const Buttons = () => {
  return (
    <div className="header__btn-group">
      <a className="btn" href={Resume} download>
        Resume
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  )
}

export default Buttons
