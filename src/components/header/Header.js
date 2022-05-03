import React from "react"
import "./Header.scss"
import Buttons from "./Buttons"
import HeaderSocial from "./HeaderSocial"
import Grefel from "../../assets/grefel-hoodie-remove-bg.png"
import { Fade } from "react-reveal"

const Header = () => {
  return (
    <header>
      <Fade left>
        <div className="container header__container">
          <h5 className="">Hello I'm</h5>
          <h1>Grefel</h1>
          <h5 className="text-light">Software Developer</h5>
          <Buttons />
          <HeaderSocial />
          <div className="grefel">
            <img src={Grefel} alt="grefel in black hoodie" />
          </div>
        </div>
      </Fade>
    </header>
  )
}

export default Header
