import React, { useEffect } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionGetrestaurantesAsync } from "../../redux/actions/restaurantsActions";
import NavbarDice from "../dice/NavbarDice";
import "./restaurants.scss";

const Restaurants = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {restaurantes}=useSelector((store)=>store.restaurantStore)
  console.log(restaurantes);
  useEffect(() => {
    if (!restaurantes.length) {
      dispatch(actionGetrestaurantesAsync())
   console.log(restaurantes);
    }
  }, [restaurantes])

  const sendRestaurant = (restaurante) => {
    navigate(`/Restaurant${restaurante}`);
  };

  return (
    <div className="restaurants">
      <NavbarDice/>
      <section className="restaurants__section">
      {restaurantes.length? (
        restaurantes.map((restaurante, index) => (
          <Card key={index} className="restaurants__cards" onClick={() => sendRestaurant(restaurante.name)}>
            
            <Card.Body>
              <Card.Title>{restaurante.name}</Card.Title>
            </Card.Body>
            <span>{restaurante.imagenes?restaurante.imagenes.map((img,i)=>(
          
          <Card.Img key={i} className='lafoto' src={img} />

        )):""} </span>
             
          </Card>
        ))
      ) : (
        <></>
      )}
      </section>
    </div>
  );
};

export default Restaurants;
