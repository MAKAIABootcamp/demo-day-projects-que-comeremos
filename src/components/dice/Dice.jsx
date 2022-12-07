import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { actionGetrestaurantesAsync } from "../../redux/actions/restaurantsActions";
import "./dice.scss";
import NavbarDice from "./NavbarDice";

const Dice = ({ isAuthentication }) => {
  const navigate=useNavigate()
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
  const [eleccion,setEleccion]=useState("")
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
      setEleccion(y)
      console.log(y);
      Swal.fire("tu restaurante sera", `...?`, "info");
    }, 2500);

    setTimeout(() => {
      setDado(false);
    }, 3500);
  };
  const goRestaurant=()=>{
    setTimeout(()=>{navigate(`/restaurant${eleccion}`);},800)
    
  }
  return (
    <>
      <NavbarDice isAuthentication={isAuthentication} />
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
      {eleccion?<div className="eleccion">


<input type="checkbox" className="button" id="button"/>
<label className="bevel" for="button" onClick={goRestaurant}>Ir al restaurante</label>
<span>{eleccion}</span>

 </div>:""}
      
      
    </>
  );
};

export default Dice;
