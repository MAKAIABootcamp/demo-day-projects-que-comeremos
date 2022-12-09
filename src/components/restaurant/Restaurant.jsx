import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actionGetrestaurantesAsync } from '../../redux/actions/restaurantsActions'
import NavbarDice from '../dice/NavbarDice'
import RatingComponent from './Rating'
import './restaurant.scss'

const Restaurant = () => {
  const {name}=useParams()
  console.log(name);
  const disptach = useDispatch();
  const [restaurant,setRestaurant]=useState({})
  const { restaurantes } = useSelector((store) => store.restaurantStore)
  useEffect(() => {
    if (!restaurantes.length) {
      disptach(actionGetrestaurantesAsync());
      console.log(restaurantes);
      
      
    }
    
  }, [restaurantes]);
  useEffect(() => {
    if (restaurantes.length) {
      console.log(restaurantes);
      const restaurantSelect= restaurantes.find((res)=>res.name===name)
      console.log(restaurantSelect);
      setRestaurant(restaurantSelect)
      
     
      
    }
   
  }, [restaurantes]);
 
  // console.log(restaurant);
  // console.log(restaurant.imagenes?restaurant.imagenes:"");
  
  
  return (
    <>
    <NavbarDice/>
    <div className="restaurant">
      <section className="restaurant__section">
        <h1 className='restaurant__h1'>{restaurant && restaurant.name?restaurant.name:"..."} </h1>
        <RatingComponent/>
        <section className="restaurant__links">
          <p>¡Me gusta!</p>
          <p>Compartir</p>
        </section>
        <p><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/clavo_xmogpe.png" alt="" className="restaurant__icono"/> Dirección:</p>
        <span><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/reloj-con-sentido-horario_vnhs4y.png" alt="" className="restaurant__icono"/> Horario de atención:
        {restaurant && restaurant.horarios?restaurant.horarios.map((item,index)=>(
          <p key={index}>{item} </p>
        )):"..."}
        </span>
        <p><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/contacto-telefonico_mrd0gb.png" alt="" className="restaurant__icono"/> Contacto:</p>
      </section>


      <article className='restaurant__article'>
      

      
  <Carousel>
  {restaurant && restaurant.imagenes?restaurant.imagenes.map((item,index)=>(
   
    
    
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
  )):"..."}
      
      
    </Carousel>
    
    
    
  
      
      </article>
    </div>
    </>
  );
};

export default Restaurant;
