import React from "react"

const Items = (props) => {
  const { name, github, demo, image } = props

  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt="weather app" />
      </div>
      <h3>{name}</h3>
      <a
        href={github}
        target="_blank"
        rel="noreferrer noopener"
        className="btn"
      >
        github
      </a>
      <a
        href={demo}
        target="_blank"
        rel="noreferrer noopener"
        className="btn btn-primary"
      >
        live demo
      </a>
    </article>
  )
}

export default Items
