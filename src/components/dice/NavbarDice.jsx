import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  actionLogout,
  actionUserLogOutAsync,
} from "../../redux/actions/userActions";
import logo from "../../assets/logo.png";
import login from "../../assets/user.png";
import "./dice.scss";

const NavbarDice = ({ isAuthentication }) => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/home");
  };

  const [userFunctions, setUserFunctions] = useState(false);
  const disptach = useDispatch();
  const logOut = () => {
    disptach(actionUserLogOutAsync());
  };

  useEffect(() => {
    if (isAuthentication) {
      setUserFunctions(true);
    } else {
      setUserFunctions(false);
    }
  }, [isAuthentication, userFunctions]);

  return (
    <div className="navbar">
      <section className="navbar__section">
        <button onClick={handleBackHome} className="navbar__buttonBack">
          back
        </button>
        <figure className="navbar__figure">
          <img src={logo} alt="" className="navbar__imgLogo" />
        </figure>
      </section>

      <section className="navbar__section">
        <Link to="/home" className="navbar__link">
          Inicio
        </Link>
        <Link className="navbar__link">Favoritos</Link>
        <Link to="/restaurants" className="navbar__link">
          Restaurantes
        </Link>
        <Link>
          {" "}
          <img src={login} alt="" className="navbar__img" />
        </Link>
      </section>
    </div>
  );
};

export default NavbarDice;
