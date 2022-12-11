import { favoritosTypes } from "../types/favoritosTypes";

const initialState = [];
export const favoritoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case favoritosTypes.GET_FAVORITOS:
            return [
                ...action.payload
            ]
                
        case favoritosTypes.ADD_FAVORITO:
            return[
                ...state,
                ...action.payload.favorito
            ]    
        case favoritosTypes.DELETE_FAVORITO:
            return [
                ...state,
                state.filter((fav)=>
                fav.id !== action.payload.id)
            ]
    
        default:
            return state
    
    }

}