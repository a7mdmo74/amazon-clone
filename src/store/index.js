import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./productsSlice/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
