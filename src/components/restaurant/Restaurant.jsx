import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionGetrestaurantesAsync } from "../../redux/actions/restaurantsActions";
import NavbarDice from "../dice/NavbarDice";
import RatingComponent from "./Rating";
import "./restaurant.scss";

const Restaurant = () => {
  const { name } = useParams();
  console.log(name);
  const disptach = useDispatch();
  const [restaurant, setRestaurant] = useState({});
  const { restaurantes } = useSelector((store) => store.restaurantStore);
  useEffect(() => {
    if (!restaurantes.length) {
      disptach(actionGetrestaurantesAsync());
      console.log(restaurantes);
    }
  }, [restaurantes]);
  useEffect(() => {
    if (restaurantes.length) {
      console.log(restaurantes);
      const restaurantSelect = restaurantes.find((res) => res.name === name);
      console.log(restaurantSelect);
      setRestaurant(restaurantSelect);
    }
  }, [restaurantes]);

  // console.log(restaurant);
  // console.log(restaurant.imagenes?restaurant.imagenes:"");

  return (
    <>
      <NavbarDice />
      <div className="restaurant">
        <section className="restaurant__section">
          <article>
            
          </article>
          <h1 className="restaurant__h1">
            {restaurant && restaurant.name ? restaurant.name : "..."}{" "}
          </h1>
          <RatingComponent />
          <section className="restaurant__links">
            <p><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670717683/pulgares-hacia-arriba_cjrhvp.png" alt="Icono Me gusta" className="restaurant__icono" /> ¡Me gusta!</p>
            <p><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670717491/share_a2wzru.png" alt="Icono Compartir" className="restaurant__icono"/> Compartir</p>
          </section>
          <p className="restaurant__p">
            <img
              src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/clavo_xmogpe.png"
              alt=""
              className="restaurant__icono"
            />{" "}
            Dirección: <br />
            <p className="restaurant__p">{restaurant && restaurant.sedes ? restaurant.sedes : "..."}{" "}</p>
            </p>

          <p className="restaurant__p">
            <img
              src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/reloj-con-sentido-horario_vnhs4y.png"
              alt=""
              className="restaurant__icono"
            />{" "}
            Horario de atención: 
            {restaurant && restaurant.horarios
              ? restaurant.horarios.map((item, index) => (
                  <p key={index}> {item} </p>
                ))
              : "..."}
          </p>
          <p className="restaurant__p">
            <img
              src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670722493/signo-de-dolar_conw8c.png"
              alt=""
              className="restaurant__icono"
            />{" "}
            Rango de Precios: <br/>
            {restaurant && restaurant.precio ? restaurant.precio : "..."}{" "}
          </p>
        </section>

        <article className="restaurant__article">
          <Carousel>
            {restaurant && restaurant.imagenes
              ? restaurant.imagenes.map((item, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={item}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              : "..."}
          </Carousel>
        </article>
      </div>
    </>
  );
};

export default Restaurant;
