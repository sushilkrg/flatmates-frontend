import React from "react";
import useGetListingDetails from "../hooks/useGetListingDetails";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { LISTING_API_ENDPOINT } from "../../utils/constant";

const ListingDetails = () => {

  const { id } = useParams();
  // console.log(id);

  useGetListingDetails(id);

  const user = useSelector((store) => store.user.user);
  const listingDetail = useSelector(store => store.listing.listingDetail);
  console.log(listingDetail);

  const handleSaveForLater = async (id) => {
    try {
      const res = await axios.post(
        `${LISTING_API_ENDPOINT}/saveforlater/${id}`,
        { id: user?._id },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      console.log("save for later added");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full p-4 md:p-6 flex flex-col md:flex-row  ">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500 rounded-lg">
          <img src={listingDetail?.img} alt="No image" />
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 p-4 space-y-4">
        <p className="font-bold">Name - {listingDetail?.postedByName}</p>
        <p>Location - {listingDetail?.location}</p>
        <p>City Name - {listingDetail?.cityName}</p>
        <p>Nearest Place - {listingDetail?.nearestPlace}</p>
        <p>Rent - ₹ {listingDetail?.rent}</p>
        <p>Looking for - {listingDetail?.lookingForGender}</p>
        <p>Looking for - {listingDetail?.lookingForAccoType}</p>
        <p>Contact No - {listingDetail?.contactNumber}</p>
        <p>
          Facilities - {listingDetail?.facilities?.map((facility) => <span key={facility}> {facility} </span>)}
        </p>

        {/* Save for Later Button */}
        <button onClick={() => handleSaveForLater(listingDetail?._id)} className="mt-6 bg-gray-800 text-white px-6 py-2 rounded-lg">
          Save for later
        </button>
      </div>
    </div>
  );
};

export default ListingDetails;
