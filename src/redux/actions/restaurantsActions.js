import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebasecofi";
import { restaurantTypes } from "../types/restaurantTypes";

const collectionName = "restaurantes";

export const actionGetrestaurantesAsync = () => {
    return async (dispatch) => {
      const restaurantesCollection = collection(dataBase, collectionName);
      const querySnapshot = await getDocs(restaurantesCollection);
      const restaurantes = [];
      try {
        querySnapshot.forEach(element => {
          const restaurant = {
            id: element.id,
            ...element.data(),
          };
          restaurantes.push(restaurant);
        });
      } catch (error) {
        console.log(error);
      } finally {
        //si no se cumple la promesa envia el array vacio
        dispatch(actionGetRestaurantesSync(restaurantes));
      }
    };
  };
  
  const actionGetRestaurantesSync = (restaurantes) => {
    return {
      type: restaurantTypes.GET_ALL_RESTAURANTS ,
        payload: restaurantes,
      
    };
  };
  