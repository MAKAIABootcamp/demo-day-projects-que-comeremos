import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { actionGetrestaurantesAsync } from "../../redux/actions/restaurantsActions";
import "./dice.scss";
import NavbarDice from "./NavbarDice";

const Dice = () => {
  const { restaurantes } = useSelector((store) => store.restaurantStore);
  const disptach = useDispatch();
  // const lista = [
  //   "pizzas juan",
  //   "pizza picolo",
  //   "pizza carlota",
  //   "carlos pizza",
  //   "pizza picolo",
  //   "pizza dominos",
  //   "pizza daikmaku",
  //   " pizza lauras",
  //   " kakos pizza",
  // ];
  const [dado, setDado] = useState(false);
  useEffect(() => {
    if (!restaurantes.length) {
      disptach(actionGetrestaurantesAsync());
      console.log(restaurantes);
    }
  }, [restaurantes]);
  console.log(restaurantes);
  const lista = restaurantes.map((item, index) => item.name);

  const changeDado = () => {
    setDado(true);
    setTimeout(() => {
      const x = Math.floor(Math.random() * lista.length);
      console.log(x);
      const y = lista.at(x);
      console.log(y);
      Swal.fire("tu restaurante sera", `${y}`, "info");
    }, 2500);

    setTimeout(() => {
      setDado(false);
    }, 3500);
  };
  return (
    <>
      <NavbarDice />
      {lista.length ? (
        <div className="contenedor">
          {dado ? (
            <div className={"dado"}>
              <div className="lado uno"></div>
              <div className="lado dos"></div>
              <div className="lado tres"></div>
              <div className="lado cuatro"></div>
              <div className="lado cinco"></div>
              <div className="lado seis"></div>
            </div>
          ) : (
            <div onClick={changeDado} className={"dados"}>
              <div className="lado uno"></div>
              <div className="lado dos"></div>
              <div className="lado tres"></div>
              <div className="lado cuatro"></div>
              <div className="lado cinco"></div>
              <div className="lado seis"></div>
            </div>
          )}
        </div>
      ) : (
        <h1> LOADING ...</h1>
      )}
    </>
  );
};

export default Dice;
