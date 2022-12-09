import React, { useEffect } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionGetrestaurantesAsync } from "../../redux/actions/restaurantsActions";
import NavbarDice from "../dice/NavbarDice";
import "./restaurants.scss";

const Restaurants = ({isAuthentication}) => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {restaurantes}=useSelector((store)=>store.restaurantStore)
  console.log(restaurantes);
  const userStore = useSelector((store) => store.userStore);
  useEffect(() => {
    if (!restaurantes.length) {
      dispatch(actionGetrestaurantesAsync())
   console.log(restaurantes);
    }
  }, [restaurantes])

  const sendRestaurant = (restaurante) => {
    navigate(`/Restaurant${restaurante}`);
  };
  const addToFavorite=()=>{

  }

  return (
    <div className="restaurants">
      <NavbarDice isAuthentication={isAuthentication} />
      <section className="restaurants__section">
      {restaurantes.length? (
        restaurantes.map((restaurante, index) => (
          <Card key={index} className="restaurants__cards" onClick={() => sendRestaurant(restaurante.name)}>
            
            <Card.Body>
              <Card.Title>{restaurante.name}</Card.Title>
            </Card.Body>

            
            {/* <span>{restaurante.imagenes?restaurante.imagenes.map((img,i)=>(
          
          <Card.Img key={i} className='lafoto' src={img} />
          

        )):""} </span> */}
        <Carousel slide={false} className="restaurants__carousel">
        {restaurante.imagenes?restaurante.imagenes.map((img,index)=>(
     <Carousel.Item key={index}>
       <img
         className="restaurants__imgs"
         src={img}
         alt="First slide"
       />
       <Carousel.Caption>

       </Carousel.Caption>
     </Carousel.Item>
    
  )):"..."}
      
      
    </Carousel>
    
    {isAuthentication && !userStore.admin ? (
              <button onClick={addToFavorite}> add Fav</button>
        ) : (
          ""
        )}
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
