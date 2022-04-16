import React from "react"
import "./About.scss"
import Grefel from "../../assets/grefel-nable-2.jpg"

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section__title">
        <h5>get to know</h5>
        <h2>about me</h2>
      </div>

      <article className="container about__container">
        <div className="image">
          <div className="about__img-container">
            <img src={Grefel} alt="grefel close up" />
          </div>
        </div>

        <div className="about__text">
          <p>
            Hello, I'm Grefel who loves coding as I love my morning coffee. My
            interest in coding started back in 2021 when it was just a way to
            automate a repetitive task I do on a computer. I searched on the web
            on how to make an application from scratch. It resulted in a lot of
            answers but one thing that repeats every answer which was to learn
            HTML, CSS, and Javascript. In the middle of learning HTML and CSS,
            it became a passion that I want to switch careers to do coding as a
            job.
            <br />
            <br />
            Fast forward to today, I've completed a handful of courses and
            tutorials online. That includes Udemy, FreeCodeCamp, and Scrimba. In
            every project-based tutorial I finished, I rebuild it myself from
            scratch by just using Google and documentation. Somebody said that
            "Repetition is the mother of learning" that is why I literally redo
            a project at least twice or more to engrain it to my memory.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = "#contact")}
          >
            Let's Talk
          </button>
        </div>
      </article>
    </section>
  )
}

export default About
