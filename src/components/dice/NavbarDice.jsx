import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import login from "../../assets/user.png";
import "./dice.scss";

const NavbarDice = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/home");
  };
  return (
    <div className="navbar">
      <section className="navbar__section">
        <button onClick={handleBackHome} className="navbar__buttonBack">
          back
        </button>
        <figure>
          <img src={logo} alt="" className="navbar__img" />
        </figure>
      </section>

      <section className="navbar__section">
        <Link to="/home" className="navbar__link">
          Inicio
        </Link>
        <Link className="navbar__link">Favoritos</Link>
        <Link>
          {" "}
          <img src={login} alt="" className="navbar__img" />
        </Link>
      </section>
    </div>
  );
};

export default NavbarDice;
