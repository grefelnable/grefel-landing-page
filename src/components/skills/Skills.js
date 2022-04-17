import React from "react"
import "./Skills.scss"
import { BsFillFileCodeFill } from "react-icons/bs"

const Skills = () => {
  return (
    <section className="section skills">
      <div className="section__title">
        <h5>what i can do</h5>
        <h2>skills</h2>
      </div>
      <article className="container skills__wrapper">
        <div className="front-end">
          <h5>frontend development</h5>
          <div className="skills__container">
            {/* single skill */}
            <div className="skill">
              <span>
                <BsFillFileCodeFill />
              </span>
              <p>HTML/CSS</p>
            </div>
            {/* end of single skill */}
            {/* single skill */}
            <div className="skill">
              <span>
                <BsFillFileCodeFill />
              </span>
              <p>Javascript</p>
            </div>
            {/* end of single skill */}
            {/* single skill */}
            <div className="skill">
              <span>
                <BsFillFileCodeFill />
              </span>
              <p>SCSS</p>
            </div>
            {/* end of single skill */}
            {/* single skill */}
            <div className="skill">
              <span>
                <BsFillFileCodeFill />
              </span>
              <p>React</p>
            </div>
            {/* end of single skill */}
            {/* single skill */}
            <div className="skill">
              <span>
                <BsFillFileCodeFill />
              </span>
              <p>React Styled Components</p>
            </div>
            {/* end of single skill */}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Skills
