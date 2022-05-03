import React from "react"
import "./Portfolio.scss"
import Data from "../../data"
import Items from "./Items"
import { Fade } from "react-reveal"

const Portfolio = () => {
  const [projects, setProjects] = React.useState(Data)
  console.log(setProjects)
  return (
    <section className="section portfolio" id="portfolio">
      <Fade left>
        <div className="section__title">
          <h5>projects made</h5>
          <h2>portfolio</h2>
        </div>

        <div className="container portfolio__container">
          {projects.map((project) => {
            return <Items key={project.id} {...project} />
          })}
          {/* Codepen Mini Projects */}
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src="./images/codepen-mini-projects.png"
                alt="codepen projects in tile layout"
              />
            </div>
            <h3>Mini Projects</h3>
            <a
              href="https://codepen.io/grefelnable/pens/public"
              target="_blank"
              rel="noreferrer noopener"
              className="btn"
            >
              codepen
            </a>
          </article>
        </div>
      </Fade>
    </section>
  )
}

export default Portfolio
