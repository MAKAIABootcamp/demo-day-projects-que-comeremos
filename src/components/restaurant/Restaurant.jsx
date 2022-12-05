import React from "react";
import { Carousel } from "react-bootstrap";
import NavbarDice from "../dice/NavbarDice";
import "./restaurant.scss";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <section className="restaurant__section">
        <h1>Nombre restaurante</h1>
        <section className="restaurant__links">
          <p>¡Me gusta!</p>
          <p>Compartir</p>
        </section>
        <p><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/clavo_xmogpe.png" alt="" className="restaurant__icono"/> Dirección:</p>
        <p><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/reloj-con-sentido-horario_vnhs4y.png" alt="" className="restaurant__icono"/> Horario de atención:</p>
        <p><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/contacto-telefonico_mrd0gb.png" alt="" className="restaurant__icono"/> Contacto:</p>
      </section>
      <Carousel slide={false} className="restaurant__carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Restaurant;
