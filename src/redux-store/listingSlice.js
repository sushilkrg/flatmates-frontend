import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listings: [],
  myListings: [],
  savedForLaterListings: [],
  listingDetail: [],
  filteredListings: [],
  loading: false,
  error: null,
};

const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    setFilteredListings: (state, action) => {
      state.filteredListings = action.payload;
    },
    setListingDetail: (state, action) => {
      state.listingDetail = action.payload;
    },
    addListing: (state, action) => {
      state.listings.push(action.payload);
    },
    deleteListing: (state, action) => {
      state.listings = state?.listings.filter(
        (listing) => listing._id !== action.payload._id
      );
      state.myListings = state.myListings.filter(
        (listing) => listing._id !== action.payload._id
      );
    },
    setAllListings: (state, action) => {
      state.listings = action.payload;
    },
    setMyListings: (state, action) => {
      state.myListings = action.payload;
    },
    setSavedForLaterListings: (state, action) => {
      // state.savedForLaterListings = action.payload;
      // If action.payload is an array, refresh the entire savedForLaterListings list
      if (Array.isArray(action.payload)) {
        state.savedForLaterListings = action.payload;
      } else {
        // Toggle logic: add or remove a single listing based on user click
        const exists = state.savedForLaterListings.some(
          (listing) => listing?._id === action.payload._id
        );
        if (exists) {
          state.savedForLaterListings = state.savedForLaterListings.filter(
        (listing) => listing?._id !== action.payload._id
          );
        } else {
          state.savedForLaterListings.push(action.payload);
        }
      }
    },
    
  },
});

export const {
  setListingDetail,
  addListing,
  deleteListing,
  setAllListings,
  setMyListings,
  setSavedForLaterListings,
  setFilteredListings,
} = listingSlice.actions;
export default listingSlice.reducer;
