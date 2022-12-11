import React, { useEffect } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionGetrestaurantesAsync } from "../../redux/actions/restaurantsActions";
import NavbarDice from "../dice/NavbarDice";
import { actionAddFavoritosAsync } from "../../redux/actions/favoritosActions";
import "./restaurants.scss";
import { actionGetFavoritesAsync } from "../../redux/actions/favoritosActions";

const Restaurants = ({ isAuthentication }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurantes } = useSelector((store) => store.restaurantStore);
  console.log(restaurantes);
  const favoritos = useSelector((store) => store.favoritos);
  console.log(favoritos);
  const userStore = useSelector((store) => store.userStore);
  useEffect(() => {
    dispatch(actionGetFavoritesAsync(userStore.uid));
  }, [userStore,dispatch]);
  useEffect(() => {
    if (!restaurantes.length) {
      dispatch(actionGetrestaurantesAsync());
      console.log(restaurantes);
    }
  }, [restaurantes]);

  const sendRestaurant = (restaurante) => {
    navigate(`/Restaurant${restaurante}`);
  };
  const addToFavorite = (restaurant, userRuta) => {
    const favorito = {
      restaurantName: restaurant,
      uid: userRuta,
    };
    

    dispatch(actionAddFavoritosAsync(favorito));
  };
  const existe = favoritos.find((res) => res.restaurantName === "Game Over");
  console.log(existe);

  return (
    <div className="restaurants">
      <NavbarDice isAuthentication={isAuthentication} />
      <section className="restaurants__section">
        {restaurantes.length ? (
          restaurantes.map((restaurante, index) => (
            <Card key={index} className="restaurants__cards">
              <Card.Body>
                <Card.Title onClick={() => sendRestaurant(restaurante.name)}>
                  {restaurante.name}{" "}
                </Card.Title>
              </Card.Body>

              {/* <span>{restaurante.imagenes?restaurante.imagenes.map((img,i)=>(
          
          <Card.Img key={i} className='lafoto' src={img} />
          

        )):""} </span> */}
              <Carousel slide={false} className="restaurants__carousel">
                {restaurante.imagenes
                  ? restaurante.imagenes.map((img, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="restaurants__imgs"
                          src={img}
                          alt="First slide"
                        />
                        <Carousel.Caption></Carousel.Caption>
                      </Carousel.Item>
                    ))
                  : "..."}
              </Carousel>

              {!favoritos.find((res) => res.restaurantName === restaurante.name)
                ? ""
                : <button
                    
                  >
                    {" "}
                    añadido
                  </button>}
              {isAuthentication && !userStore.admin ? (
                !favoritos.find(
                  (res) => res.restaurantName === restaurante.name
                ) ? (
                  <button
                    onClick={() =>
                      addToFavorite(restaurante.name, userStore.uid)
                    }
                  >
                    {" "}
                    añadir fav
                  </button>
                ) : (
                  ""
                )
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
