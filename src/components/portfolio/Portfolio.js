import React from "react"
import "./Portfolio.scss"
import Data from "../../data"
import Items from "./Items"

const Portfolio = () => {
  const [projects, setProjects] = React.useState(Data)
  console.log(setProjects)
  return (
    <section className="section portfolio" id="portfolio">
      <div className="section__title">
        <h5>projects made</h5>
        <h2>portfolio</h2>
      </div>

      <div className="container portfolio__container">
        {projects.map((project) => {
          return <Items key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Portfolio
