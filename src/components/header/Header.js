import React from "react"
import "./Header.scss"
import Buttons from "./Buttons"
import HeaderSocial from "./HeaderSocial"
import Grefel from "../../assets/grefel-hoodie-remove-bg.png"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Grefel</h1>
        <h5 className="text-light">Software Developer</h5>
        <Buttons />
        <HeaderSocial />
        <div className="grefel">
          <img src={Grefel} alt="grefel in black hoodie" />
        </div>
      </div>
    </header>
  )
}

export default Header
