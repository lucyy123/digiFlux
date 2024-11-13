import { configureStore, } from "@reduxjs/toolkit/react";
import { pageSlice } from "./reducer";

export  const store = configureStore({
    reducer: {
      page: pageSlice.reducer, // Adding the page slice to the store
    },
  });