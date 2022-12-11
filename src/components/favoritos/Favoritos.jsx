import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { actionDeletePaletaAsync, actionGetFavoritesAsync } from '../../redux/actions/favoritosActions';
import NavbarDice from '../dice/NavbarDice';
import "./favoritos.scss"

const Favoritos = () => {
  const dispatch=useDispatch()
  const userStore = useSelector((store) => store.userStore)
  const favoritos= useSelector((store)=> store.favoritos)
  const navigate = useNavigate()
  console.log(userStore);
  console.log(favoritos);
  useEffect(() => {
   
    dispatch(actionGetFavoritesAsync(userStore.uid))
  
  }, [userStore])
  console.log(favoritos);

  const sendRestaurant = (restaurante) => {
    navigate(`/Restaurant${restaurante}`);
  };
  const deleteFavorite=(id)=>{
    dispatch(actionDeletePaletaAsync(id))
  }
  
  return (
    <>
    <NavbarDice/>
    <div className='favoritos'>
      <h1>MI LISTA DE FAVORITOS</h1>
    {favoritos && favoritos.length ? favoritos.map((item,index)=>(
      <div key={index}>
      <Card style={{ width: '18rem' }} className='favoritos' >
      <Card.Img variant="top" src="holder.js/100px180" />
      
      <Card.Body>
        <Card.Title>{item.restaurantName}</Card.Title>
        <Button onClick={() => sendRestaurant(item.restaurantName)}> ver</Button>
      <Button onClick={() => deleteFavorite(item.id)}> eliminar</Button>
      </Card.Body>
    </Card>
  
    </div>
    ))  :""}
    </div>
    </>
   
  )
}

export default Favoritos