import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  actionLogout,
  actionUserLogOutAsync,
} from "../../redux/actions/userActions";
import logo from "../../assets/logo.png";
import login from "../../assets/user.png";
import "./dice.scss";

const NavbarDice = ({ isAuthentication }) => {
  const disptach = useDispatch();
  const logOut = () => {
    disptach(actionUserLogOutAsync());
  };
  const userStore = useSelector((store) => store.userStore);
  const [userFunctions, setUserFunctions] = useState(false);

  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/home");
  };
  useEffect(() => {
    if (isAuthentication) {
      setUserFunctions(true);
    } else {
      setUserFunctions(false);
    }
  }, [isAuthentication, userFunctions]);
  useEffect(() => {
    console.log(userStore);
    console.log(isAuthentication);
  }, [userStore]);
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
        {isAuthentication && userStore.admin ? (
          <>
            <button> Add restaurant</button>
            <button> Edit restaurant</button>{" "}
          </>
        ) : (
          ""
        )}
        {isAuthentication && !userStore.admin ? (
          <Link to="/favorites" className="navbar__link">Favoritos</Link>
        ) : (
          ""
        )}
        <Link to="/restaurants" className="navbar__link">
          Restaurantes
        </Link>
        {isAuthentication ? userStore.displayName : ""}
        {isAuthentication ? (
          ""
        ) : (
          <Link to={"/login"}>
            <img src={login} alt="" className="navbar__img" />{" "}
          </Link>
        )}
        {isAuthentication ? <button onClick={logOut} className="navbar__salir"> salir</button> : ""}
      </section>
    </div>
  );
};

export default NavbarDice;
