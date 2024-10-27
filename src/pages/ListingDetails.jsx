import React from "react";
import { toast } from 'react-hot-toast';
import useGetListingDetails from "../hooks/useGetListingDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LISTING_API_ENDPOINT } from "../utils/constant";
import { deleteListing } from "../redux-store/listingSlice";

const ListingDetails = () => {

  const { id } = useParams();
  useGetListingDetails(id);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const listingDetail = useSelector(store => store.listing.listingDetail);

  const handleSaveForLater = async (id) => {
    if (!user) {
      toast.error("Login to save for later");
      return;
    }
    try {
      const res = await axios.post(
        `${LISTING_API_ENDPOINT}/saveforlater/${id}`,
        { id: user?._id },
        {
          withCredentials: true,
        }
      );
      toast.success(res?.data?.message);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteListing = async (id) => {
    try {
      const res = await axios.delete(`${LISTING_API_ENDPOINT}/${id}`,
        {
          withCredentials: true
        });
      toast.success(res?.data?.message);
      dispatch(deleteListing(res?.data?.listing))
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full min-h-[90vh] p-4 md:p-6 flex flex-col md:flex-row  ">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500 rounded-lg">
          <img className="object-cover	w-full h-full" src={listingDetail?.image} alt="No image" />
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 p-4 space-y-4">
        <p>
          <span className="text-gray-300">Posted by: </span>
          <span className="text-white font-semibold"> {listingDetail?.postedByName}</span>
        </p>
        <p>
          <span className="text-gray-300">Location: </span>
          <span className="text-white font-semibold"> {listingDetail?.location}</span>
        </p>
        <p>
          <span className="text-gray-300">City Name: </span>
          <span className="text-white font-semibold"> {listingDetail?.cityName}</span>
        </p>
        <p>
          <span className="text-gray-300">Nearest Place: </span>
          <span className="text-white font-semibold"> {listingDetail?.nearestPlace}</span>
        </p>
        <p>
          <span className="text-gray-300">Rent: </span>
          <span className="text-white font-semibold"> ₹ {listingDetail?.rent}</span>
        </p>
        <p>
          <span className="text-gray-300">Looking for: </span>
          <span className="text-white font-semibold"> {listingDetail?.lookingForGender}</span>
        </p>
        <p>
          <span className="text-gray-300">Looking for: </span>
          <span className="text-white font-semibold"> {listingDetail?.lookingForAccoType}</span>
        </p>
        <p>
          <span className="text-gray-300">Contact No: </span>
          <span className="text-white font-semibold"> {listingDetail?.contactNumber}</span>
        </p>
        <p>
          <span className="text-gray-300">Facilities: </span>
          <span className="text-white font-semibold"> {listingDetail?.facilities?.map((facility) => <span key={facility}> {facility} </span>)}</span>
        </p>

        {/* Save for Later Button */}
        {user?._id != listingDetail?.postedBy && <button onClick={() => handleSaveForLater(listingDetail?._id)} className="mt-6 bg-white hover:bg-slate-300 text-black px-6 py-2 rounded-lg">
          Save for later
        </button>}
        {user?._id == listingDetail?.postedBy && <button onClick={() => handleDeleteListing(listingDetail?._id)} className="mt-6 bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded-lg">
          delete
        </button>}
      </div>
    </div>
  );
};

export default ListingDetails;
