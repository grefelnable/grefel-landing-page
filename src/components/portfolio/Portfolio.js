import React from "react"
import "./Portfolio.scss"
import PORT1 from "../../assets/weather-app.png"

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="section__title">
        <h5>projects made</h5>
        <h2>portfolio</h2>
      </div>

      <div className="container portfolio__container">
        {/* single item */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT1} alt="weather app" />
          </div>
          <h3>weather app</h3>
          <a
            href="https://github.com/grefelnable/weather-app-grefel"
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            github
          </a>
          <a
            href="https://weather-app-grefel.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary"
          >
            live demo
          </a>
        </article>
        {/* end of single item */}
      </div>
    </section>
  )
}

export default Portfolio
