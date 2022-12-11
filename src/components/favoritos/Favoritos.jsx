import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionDeletePaletaAsync, actionGetFavoritesAsync } from '../../redux/actions/favoritosActions';

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
      
    {favoritos && favoritos.length ? favoritos.map((item,index)=>(
      <div key={index}>{item.restaurantName}
      <button onClick={() => sendRestaurant(item.restaurantName)}> ver</button>
      <button onClick={() => deleteFavorite(item.id)}> eliminar</button>
      </div>

    ))  :""}
    </>
   
  )
}

export default Favoritos