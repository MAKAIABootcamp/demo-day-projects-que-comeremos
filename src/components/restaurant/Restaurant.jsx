import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actionGetrestaurantesAsync } from '../../redux/actions/restaurantsActions'
import NavbarDice from '../dice/NavbarDice'
import Rating from './Rating'
import './restaurant.scss'

const Restaurant = () => {
  const {name}=useParams()
  console.log(name);
  const disptach = useDispatch();
  const [restaurant,setRestaurant]=useState(false)
  const { restaurantes } = useSelector((store) => store.restaurantStore)
  useEffect(() => {
    if (!restaurantes.length) {
      disptach(actionGetrestaurantesAsync());
      console.log(restaurantes);
      
      
    }
    
  }, [restaurantes]);
  useEffect(() => {
    if (restaurantes.length) {
      const restaurantSelect= restaurantes.find((res)=>res.name=name)
      console.log(restaurantSelect);
      setRestaurant(restaurantSelect)
     
      
    }
   
  }, [restaurant,restaurantes]);
  console.log(restaurant);
  
  
  return (
    <div className="restaurant">
    
      <section className="restaurant__section">
        <h1>{restaurant.name?restaurant.name:""} </h1>
        <section className="restaurant__links">
          <p>¡Me gusta!</p>
          <p>Compartir</p>
        </section>
        <p><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/clavo_xmogpe.png" alt="" className="restaurant__icono"/> Dirección:</p>
        <p><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/reloj-con-sentido-horario_vnhs4y.png" alt="" className="restaurant__icono"/> Horario de atención:</p>
        <p><img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1670254421/contacto-telefonico_mrd0gb.png" alt="" className="restaurant__icono"/> Contacto:</p>
      </section>


      {/* <article className='restaurant__article'>
      
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
      </article> */}
      <article className='restaurant__article'>
      

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  {restaurant?restaurant.imagenes.map((item,index)=>(
    <div className="carousel-item active">
    
      <img src={item} className="d-block w-100" alt="..."/>
    </div>
  )):""}
    
    
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
      </article>
    </div>
  );
};

export default Restaurant;
