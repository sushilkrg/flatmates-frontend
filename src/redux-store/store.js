import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import listingSlice from "./listingSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    listing: listingSlice,
  },
});

// // Fetch user data from localStorage on app load
// const storedUser = localStorage.getItem("user");

// if (storedUser) {
//   console.log(storedUser);
//   // Update state with retrieved data
//   store.dispatch(authSlice.actions.login(JSON.parse(storedUser)));
// }
