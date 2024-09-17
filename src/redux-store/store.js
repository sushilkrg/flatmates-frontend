import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import listingSlice from "./listingSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    listing: listingSlice,
  },
});

