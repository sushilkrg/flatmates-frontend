import React from "react";
import ListingCard from "../components/ListingCard";

const SavedForLater = () => {
  return (
    <div className="">
      <h2 className="text-center mt-4">Saved for later</h2>
      <div className="container mx-auto p-4 space-y-4">

        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>



    </div>
  );
};

export default SavedForLater;
