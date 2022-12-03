import { userTypes } from "../types/userTypes";
const initialState={}
export const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case userTypes.USER_REGISTER:
            return{
                ...state,
                ...action.payload
            }


        case userTypes.USER_LOGIN:
            return{
                ...state,
                ...action.payload
            }
            case userTypes.USER_LOGOUT:
                return{
                    
                }
            
           
    
        default:
            return state
    }

}