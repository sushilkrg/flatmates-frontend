import { useSelector } from "react-redux";
import useGetSavedForLaterListings from "../hooks/useGetSavedForLaterListings";
import Listings from "../components/Listings";

const SavedForLater = () => {
  useGetSavedForLaterListings();
  const savedForLaterListings = useSelector(store => store.listing.savedForLaterListings)

  return (
    <div className="container mx-auto min-h-[84vh]">
      <h2 className="text-center mt-4">Saved for later</h2>
      <div className=" mx-auto p-4 space-y-4">
        <Listings listings={savedForLaterListings} />
      </div>
    </div>
  );
};

export default SavedForLater;
