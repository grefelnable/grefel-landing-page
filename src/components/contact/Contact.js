import React from "react"
import "./Contact.scss"
import { FiMail } from "react-icons/fi"
import { RiMessengerLine } from "react-icons/ri"
const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section__title">
        <h5>get in touch</h5>
        <h2>contact me</h2>
      </div>
      <div className="container contact__container">
        {/* contact options */}
        {/* end of contact options */}
        <div className="contact__options">
          {/* single contact */}
          <article className="contact__option">
            <span>
              <FiMail />
            </span>
            <p>email</p>
            <small>felnable@gmail.com</small>
            <a href="mailto:felnable@gmail.com">send a message</a>
          </article>
          {/* end of single contact */}
          {/* single contact */}
          <article className="contact__option">
            <span>
              <RiMessengerLine />
            </span>
            <p>messenger</p>
            <small>Grefel Nable</small>
            <a
              href="https://m.me/grefel.nable.1"
              target="_blank"
              rel="noreferrer noopener"
            >
              send a message
            </a>
          </article>
          {/* end of single contact */}
        </div>
        {/* end of contact options */}
        {/* contact form */}
        <form action="/">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name "
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
