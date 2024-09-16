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
        (listing) => listing.id !== action.payload
      );
    },
    setAllListings: (state, action) => {
      state.listings = action.payload;
    },
    setMyListings: (state, action) => {
      state.myListings = action.payload;
    },
    setSavedForLaterListings: (state, action) => {
      state.savedForLaterListings = action.payload;
    },

    // Action to start a loading state
    //  startLoading: (state) => {
    //     state.loading = true;
    //   },
    // Action to stop a loading state
    //   stopLoading: (state) => {
    //     state.loading = false;
    //   },
    // Action to set an error message
    //   setError: (state, action) => {
    //     state.error = action.payload;
    //   },
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
