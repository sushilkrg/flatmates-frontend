import React from "react";
import ListingCard from "../components/ListingCard";
import { useSelector } from "react-redux";
import useGetSavedForLaterListings from "../hooks/useGetSavedForLaterListings";
import Listings from "../components/Listings";

const SavedForLater = () => {
  useGetSavedForLaterListings();
  const savedForLaterListings = useSelector(store => store.listing.savedForLaterListings)
  return (
    <div className="">
      <h2 className="text-center mt-4">Saved for later</h2>
      <div className=" mx-auto p-4 space-y-4">

        <Listings listings={savedForLaterListings} />
        {/* <ListingCard /> */}
        {/* <ListingCard /> */}
      </div>



    </div>
  );
};

export default SavedForLater;
