import React from "react";
import ControlledCarousel from "../carousel/Carousel";
import Footer from "../footer/Footer";
import NavbarDice from "../dice/NavbarDice";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleDicePage = () => {
    navigate("/dice");
  };
  return (
    <>
      <NavbarDice />
      <section className="home">
        <div className="home__section1">
          <h1 className="home__title">¿Qué comeremos hoy?</h1>
          <p className="home__text">
            Hey! Los invitamos a que tiren el dado y encuentren un lugar
            diferente en donde puedan comer el dia de hoy. Que esperas?!
          </p>
        </div>
        <div className="home__section2">
          <div className="contenedor2">
            <div className={"dado2"}>
              <div className="lado uno"></div>
              <div className="lado dos"></div>
              <div className="lado tres"></div>
              <div className="lado cuatro"></div>
              <div className="lado cinco"></div>
              <div className="lado seis"></div>
            </div>
          </div>
          <button onClick={handleDicePage} className="home__ThrowDice">
            Tira el dado!
          </button>
        </div>
      </section>
      <hr />
      <div>
        <ControlledCarousel />
      </div>
      <hr />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
