import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import propertyReducer from "./property";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    property: propertyReducer,
  },
});

export default store;
