import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./dice.scss";
import NavbarDice from "./NavbarDice";

const Dice = () => {
  const lista = [
    "pizzas juan",
    "pizza picolo",
    "pizza carlota",
    "carlos pizza",
    "pizza picolo",
    "pizza dominos",
    "pizza daikmaku",
    " pizza lauras",
    " kakos pizza",
  ];
  const [dado, setDado] = useState(false);
  const changeDado=()=>{
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
  
  }
  return (
    <>
      <NavbarDice />
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
    </>
  );
};

export default Dice;
