import React from "react";
import "./splash.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const SplashScreen = () => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="splash">
        <section className="splash__main">
          <button onClick={handlePage} className="splash__button">
            <img src={logo} alt="" className="splash__image1" />
          </button>
          <h1 className="splash__title">¿Qué comeremos hoy?</h1>
        </section>
      </div>
    </>
  );
};

export default SplashScreen;
