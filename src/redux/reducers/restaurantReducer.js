import { restaurantTypes } from "../types/restaurantTypes";

const initialState = {
  restaurantes: [],
  restauranteSelect: {},
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case restaurantTypes.GET_ALL_RESTAURANTS:
      return {
        restaurantes: action.payload,
      };

    case restaurantTypes.GET_RESTAURANT:
      return {
        restaurantes: [...state.restaurantes],
        restauranteSelect: action.payload,
      };

    default:
      return state;
  }
};
