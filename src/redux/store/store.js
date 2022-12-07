import { configureStore } from "@reduxjs/toolkit";
import { favoritoReducer } from "../reducers/favoritosReducer";
import { restaurantReducer } from "../reducers/restaurantReducer";
import { userReducer } from "../reducers/userReducer";

const reducer = {
  favoritos:favoritoReducer,
  userStore: userReducer,
  restaurantStore: restaurantReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
