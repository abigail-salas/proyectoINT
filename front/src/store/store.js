import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import favoritesReducer from "./favorite";

import userReducer from "./user";
import propertyReducer from "./property";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    property: propertyReducer,
    favorites: favoritesReducer,
    user: userReducer,
  },
});

export default store;
