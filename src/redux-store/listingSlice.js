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
      state.listings = state.listings.filter(
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
      if (
        state.savedForLaterListings.some(
          (listing) => listing?._id === action.payload._id
        )
      ) {
        // If the listing is already saved, remove it from the array
        state.savedForLaterListings = state.savedForLaterListings.filter(
          (listing) => listing?._id !== action.payload._id
        );
      } else {
        // If the listing is not in the array, add it to the saved list
        state.savedForLaterListings = [
          ...state.savedForLaterListings,
          action.payload,
        ];
        // state.savedForLaterListings = action.payload;
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
