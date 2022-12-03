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
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          restaurantes.push({
            id: doc.id,
            ...doc.data(),
          });
          //   console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
        console.error(error);
      } finally {
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
  