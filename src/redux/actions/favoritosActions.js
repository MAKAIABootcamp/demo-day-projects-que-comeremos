import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebasecofi";
import { favoritosTypes } from "../types/favoritosTypes";

const collectionName = "favoritos";
const favoritosCollection= collection(dataBase, collectionName);

export const actionGetFavoritesAsync=(uid)=>{
    return async (dispatch)=>{

        console.log(uid);
        
        const q = query(favoritosCollection, where("uid", "==", uid))
        const favoritos=[];
        try {
            const querySnapshot= await getDocs(q)
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                favoritos.push({
                  id: doc.id,
                  ...doc.data(),
                });
                //   console.log(doc.id, " => ", doc.data());
              });
            
            
        } catch (error) {
            console.log(error);
            
        }
        finally{
            dispatch(getFavoritosSync(favoritos))
        }

    }

}

const getFavoritosSync=(favoritos)=>{
    return {
        type:favoritosTypes.GET_FAVORITOS,
        payload:favoritos
    }
}
export const actionAddFavoritosAsync=(favorito)=>{
    return async(dispatch)=>{
        
        try {
            const docs= await addDoc(favoritosCollection,favorito)
            const newFavorito={
            id:docs.id,
            ...favorito
        }
        dispatch(actionAddFavoritoSync(newFavorito))
            
        } catch (error) {
            console.log(error);
            
        }

    }
}
const actionAddFavoritoSync=(favorito)=>{
return {
    type:favoritosTypes.ADD_FAVORITO,
    payload:{...favorito}
}

}
export const actionDeletePaletaAsync=(favoriteId)=>{
    return async(dispatch)=>{
        const  favoriteRef = doc(dataBase, collectionName, favoriteId)
        try {
            await deleteDoc(favoriteRef);
            dispatch(actionDeletePaletaSync(favoriteId))
            
        } catch (error) {
            console.log(error);
            
        }
    }

}
const actionDeletePaletaSync=(favoriteId)=>{
    return {
        type:favoritosTypes.DELETE_FAVORITO,
        payload:favoriteId
    }
}