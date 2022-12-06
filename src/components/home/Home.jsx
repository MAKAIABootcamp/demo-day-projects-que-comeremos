import React from "react";
import ControlledCarousel from "../carousel/Carousel";
import Footer from "../footer/Footer";
import NavbarDice from "../dice/NavbarDice";
import "./home.scss";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionUserLogOutAsync } from "../../redux/actions/userActions";

const Home = ({ isAuthentication }) => {
  const dispatch = useDispatch();

  const userStore = useSelector((store) => store.userStore);
  const navigate = useNavigate();
  const handleDicePage = () => {
    navigate("/dice");
  };
  return (
    <>
      <NavbarDice isAuthentication={isAuthentication} />
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
      {/* {isAuthentication && userStore.admin ? (
        <div>
          <button> Add restaurant</button>
          <button> Edit restaurant</button>{" "}
        </div>
      ) : (
        ""
      )}
      {isAuthentication && !userStore.admin ? (
        <div>
          <button> Favoritos</button>
        </div>
      ) : (
        ""
      )} */}
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
