import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import listingSlice from "./listingSlice";
import locationSlice from "./locationSlice"

export const store = configureStore({
  reducer: {
    user: authSlice,
    location: locationSlice,
    listing: listingSlice,
  },
});

