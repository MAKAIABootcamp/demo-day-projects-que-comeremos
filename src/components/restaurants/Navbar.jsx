import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import login from '../../assets/user.png'
import './restaurants.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <section className="navbar__section">
        <figure>
          <img src={logo} alt="" className="navbar__img"/>
        </figure>
      </section>

      <section className="navbar__section">
        <Link to="/" className="navbar__link">Inicio</Link>
        <Link className="navbar__link">Favoritos</Link>
        <Link> <img src={login} alt="" className="navbar__img" /></Link>
      </section>
    </div>
  );
};

export default Navbar;
